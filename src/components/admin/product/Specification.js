'use client';

import {useEffect, useMemo, useState} from "react";
import {Field, Select} from '@headlessui/react'
import Icon from "@m3/assets/icons/Icon";

export default function Specification({categories, defData}) {
    const [selectedCategory, setSelectedCategory] = useState(defData ? defData?.category ? defData.category._id : null : null);
    const [specs, setSpecs] = useState(null);
    const API = process.env.STATUS === "production" ? process.env["ProductionURL"] : process.env["DevURL"]

    useMemo(async () => {
        if (defData?.category?._id) {
            const data = await fetch(`${API}/api/specs/bycategory/${defData?.category?._id}`)
            setSpecs(await data.json())
        }
    }, [defData]);
    const onChangeCategory = async (id) => {
        console.log(id)
        const data = await fetch(`${API}/api/specs/bycategory/${id}`)
        setSelectedCategory(id)
        setSpecs(await data.json())
    }
    return (
        <div className={"grid grid-cols-12 gap-2"}>
            <div className={"flex font-medium items-center text-on-surface-light text-label-large col-span-12"}>
دسته بندی :
                <Field className={"relative w-fit max-w-fit"}>

                    <Select style={{appearance:"none !important" }} defaultValue={defData?.category ? defData.category.id : "-"} name={"category"}
                            className={"w-fit px-1 min-w-fit py-0 !text-body-large rounded-[0px] block !appearance-none h-fit text-primary-light font-bold bg-transparent border-0"}
                            onChange={(e) => onChangeCategory(e.target.value)}
                    >
                        <option className={"text-label-large"} disabled label={"-"} value={"-"}/>
                        {categories.map(category =>
                            <option className={"text-label-large"} key={category.id} value={category._id}>{category.title}</option>
                        )}

                    </Select>
                    {/*<Icon aria-hidden="true" size={24}*/}
                    {/*      className="group pointer-events-none absolute top-2.5 left-2.5 text-black">*/}
                    {/*    arrow_drop_down*/}
                    {/*</Icon>*/}
                </Field>

            </div>
            <table className={"max-w-3xl col-span-12 rounded-[16px] overflow-hidden"}>
                <tr
                    className={"*:bg-surface-container-high-light *:font-bold text-title-small *:w-6/12 *:py-4 *:px-4 rounded-t-[16px] overflow-hidden"}>
                <th className={" "}>
                    نام مشخصه
                </th>
                <th>
                    مقدار
                </th>
                </tr>
                <tbody
                    className={" border-t-0  rounded-[16px] overflow-hidden  *:w-6/12 bg-surface-container-low-light"}>
                {specs && specs.map((spec, index) => (
                    <tr key={index}>
                        <td className={"px-4"}>
                            {spec.title}
                        </td>
                        <td>
                            <Select defaultValue={defData ? JSON.stringify({
                                "key": defData.spec.find(s => s.key.id === spec.id).key._id,
                                "value": defData.spec.find(s => s.key.id === spec.id).value
                            }) : JSON.stringify({"key": spec._id, "value": spec.values[0]._id})} name={"specs"}
                                    className={"border-0 bg-transparent !appearance-none w-full"}>
                                {spec.values.map((value, index) => (
                                    <option key={index} value={JSON.stringify({
                                        "key": spec._id,
                                        "value": value._id
                                    })}>{value.title}</option>
                                ))}

                            </Select>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>


        </div>
    )
}