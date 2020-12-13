import React from "react";

const MiscStyles = () => {
    return (
        <div className="p-2 bg-yellow-300 flex-1">
            <div className="grid grid-cols-3 divide-x divide-green-900 divide-dashed">
                <div className="p-2 bg-green-400">1</div>
                <div className="p-2 bg-green-400">2</div>
                <div className="p-2 bg-green-400">3</div>
            </div>

            <button className="ring-pink-300 bg-red-300 ring-4 m-2 p-2">
                ring outside btn
            </button>
            <button className="ring-inset ring-pink-300 bg-red-300 ring-4 m-2 p-2">
                ring inside btn
            </button>

            <button className="ring-pink-600 ring-offset-4 ring-offset-green-300 bg-red-300 ring-4 m-2 p-2">
                ring-4
            </button>

            <div className="shadow-xl bg-purple-200 p-2 m-2">Box Shadow</div>
            <div className="shadow-inner bg-purple-300 p-2 m-5">
                Box Shadow Inside
            </div>

            {/* table-auto to fix column size as per length of content, table-fixed, for equal
            column widths. */}
            <table className="table-auto bg-purple-300 text-red-500">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intro to CSS</td>
                        <td>Adam</td>
                        <td>858</td>
                    </tr>
                    <tr className="bg-emerald-200">
                        <td>
                            A Long and Winding Tour of the History of UI
                            Frameworks and Tools and the Impact on Design
                        </td>
                        <td>Adam</td>
                        <td>112</td>
                    </tr>
                    <tr>
                        <td>Intro to JavaScript</td>
                        <td>Chris</td>
                        <td>1,280</td>
                    </tr>
                </tbody>
            </table>

            <div className="cursor-pointer p-2 m-2">Cursor-Pointer</div>

            <div className="cursor-wait p-2 m-2">Hover me</div>

            <div className="cursor-text p-2 m-2">
                cursor to indicate the text can be selected
            </div>

            <div className="cursor-move p-2 m-2">
                Cursor to indicate drag possible
            </div>

            <div className="cursor-not-allowed p-2 m-2">Cursor-not-allowed</div>

            <textarea className="resize-x border rounded-md m-2 p-2">
                Can Resize horizontally
            </textarea>
            <textarea className="resize-none border rounded-md m-2 p-2">
                Can&apos;t Resize
            </textarea>

            <div class="select-all m-2 p-2 bg-gray-500">
                Click anywhere in this text to select it all
            </div>
        </div>
    );
};

export default MiscStyles;
