import Quill from "quill";
import { useEffect, useRef, useState } from "react";


export const MessageRenderer = ({ value }) => {
    console.log("Value:", value);
    const rendererRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        console.log('Render Ref:', rendererRef.current);
        if (!rendererRef.current) return;
        const quill = new Quill(document.createElement('div'), { theme: 'snow' });
        //disable editing
        quill.disable();
        const content = JSON.parse(value); // the value  is parsed into json(delta ,which quill engine acceps)
        quill.setContents(content);
        console.log('Contents:', quill.root.innerHTML);
        // the paresd data is now converted into html to add into div of container
        const isContentEmpty = quill.getText().trim().length === 0;
        setIsEmpty(isContentEmpty);
        rendererRef.current.innerHTML = quill.root.innerHTML;
    }, [value]);
    if (isEmpty) return null;
    return (
        <div ref={rendererRef} className="ql-editor ql-rendered" />
    );
};