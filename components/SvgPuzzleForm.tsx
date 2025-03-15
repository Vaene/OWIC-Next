import { useState, FormEvent } from "react";
import opentype from "opentype.js";
import earcut from "earcut";
import { renderToString } from "react-dom/server";

export default function SvgPuzzleForm() {
  const [text, setText] = useState<string>("");
  const [svgMarkup, setSvgMarkup] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(108);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      // Load the Open Sans ExtraBold font remotely
      const fontUrl = "https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.ttf";
      const font = await opentype.load(fontUrl);
  
      let xOffset = 0;
      const paths: JSX.Element[] = [];
  
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const glyph = font.charToGlyph(char);
  
        // Get the path for the character
        const path = glyph.getPath(xOffset, fontSize, fontSize);
        const pathData = path.toPathData();
        console.log("Path Data for", char, ":", pathData);
  
        // Convert the path data to a list of points
        const points = parsePathData(pathData);
        console.log("Parsed Points for", char, ":", points);
  
        // Triangulate the points
        const triangles = triangulate(points);
        console.log("Triangles for", char, ":", triangles);
  
        // Render each triangle as an SVG <polygon>
        const triangleElements = triangles.map((triangle, index) => (
          <polygon
            key={index}
            points={triangle}
            fill="black"
            stroke="white"
            strokeWidth="0.5"
          />
        ));
  
        // Add the triangles to the paths array
        paths.push(...triangleElements);
  
        // Update the xOffset for the next character
        xOffset += glyph.advanceWidth ? glyph.advanceWidth * (fontSize / font.unitsPerEm) : fontSize;
      }
  
      // Wrap the paths in a <g> element with an id
      const svgContent = (
        <g id="Randy">
          {paths}
        </g>
      );
  
      // Convert the React element to a string
      const svgString = `<svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">${renderToString(svgContent)}</svg>`;
      setSvgMarkup(svgString);
    } catch (error) {
      console.error("Failed to load font:", error);
    }
  };

  /**
   * Parse SVG path data into a list of points.
   */
  const parsePathData = (pathData: string): number[] => {
    const points: number[] = [];
    const commands = pathData.split(/[ ,]/).filter((cmd) => cmd !== "");
  
    let x = 0;
    let y = 0;
  
    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];
  
      if (cmd === "M" || cmd === "L") {
        // Move or Line command
        x = parseFloat(commands[i + 1]);
        y = parseFloat(commands[i + 2]);
        points.push(x, y);
        i += 2;
      } else if (cmd === "Q") {
        // Quadratic Bezier command
        const cx = parseFloat(commands[i + 1]); // Control point x
        const cy = parseFloat(commands[i + 2]); // Control point y
        const ex = parseFloat(commands[i + 3]); // End point x
        const ey = parseFloat(commands[i + 4]); // End point y
  
        // Approximate the curve with line segments
        for (let t = 0; t <= 1; t += 0.1) {
          const tx = (1 - t) * (1 - t) * x + 2 * (1 - t) * t * cx + t * t * ex;
          const ty = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * cy + t * t * ey;
          points.push(tx, ty);
        }
  
        x = ex;
        y = ey;
        i += 4;
      } else if (cmd === "Z") {
        // Close path command
        points.push(points[0], points[1]); // Close the shape by returning to the start point
      }
    }
  
    return points;
  };

  /**
   * Triangulate a list of points using the Ear Clipping algorithm.
   */
  const triangulate = (points: number[]): string[] => {
    if (points.length < 6) {
      console.error("Not enough points to triangulate");
      return [];
    }
  
    const triangles = earcut(points);
    const result: string[] = [];
  
    for (let i = 0; i < triangles.length; i += 3) {
      const p1 = triangles[i];
      const p2 = triangles[i + 1];
      const p3 = triangles[i + 2];
  
      const trianglePoints = [
        points[p1 * 2], points[p1 * 2 + 1],
        points[p2 * 2], points[p2 * 2 + 1],
        points[p3 * 2], points[p3 * 2 + 1],
      ].join(",");
  
      result.push(trianglePoints);
    }
  
    return result;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
        </div>
        <div>
          <label htmlFor="fontSize">Font Size:</label>
          <input
            type="number"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            placeholder="Font Size"
          />
        </div>
        <button type="submit">Generate Vector SVG</button>
      </form>

      <div
        className="svg-preview"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      {svgMarkup && (
        <textarea
          readOnly
          value={svgMarkup}
          className="svg-textarea"
        />
      )}
    </div>
  );
}