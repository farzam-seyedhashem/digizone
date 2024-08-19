'use client'
import EditorJS from '@editorjs/editorjs';
import {useEffect, useMemo, useState} from "react";
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Table from '@editorjs/table';
export default function Editor({name,defaultValue}) {
    const [data,setData] = useState(defaultValue ? JSON.parse(defaultValue) : []);
    useEffect(() => {
        const editor = new EditorJS({
            data:data,
            holder: 'editorjs',
            tools: {
                header: Header,
                linkTool: {
                    class: LinkTool,
                    config: {
                        endpoint: '/api/fetch-url', // Your backend endpoint for url data fetching
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                // checklist: {
                //     class: Checklist,
                //     inlineToolbar: true,
                // },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
            },
            onChange: (api, event) => {
                api.saver.save().then((outputData) => {
                    onEditorChange(JSON.stringify(outputData))
                    // console.log('Article data: ', )
                }).catch((error) => {
                    console.log('Saving failed: ', error)
                });
            }
        });
    },[]);
    let onEditorChange = async (data) => {
        setData(data)
    }
    return(
        <div className={"w-full"}>
            <div id={"editorjs"} className="rounded-[24px] overflow-hidden bg-surface-light w-full h-[500px]" onChange={onEditorChange}/>
            <input hidden name={name} value={data}/>
        </div>
    )
};