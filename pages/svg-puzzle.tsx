import { useRef } from 'react';
import SvgPuzzleForm from "../components/SvgPuzzleForm";

export default function SvgPuzzlePage() {
    const main = useRef(null);

    return (
        <main ref={main} className="main-container">
            <section className="panel red">
                <h1>SVG Puzzle Generator</h1>
                <SvgPuzzleForm />
            </section>
        </main> 
    );
}