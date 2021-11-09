import React, { useEffect, useState, Fragment } from "react";
import { parse } from 'papaparse'

export default function ProductData() {
    const [data, setData] = useState([]);


    useEffect(() => {
        parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTNWGKLN_kZI_k5OWeEFss_qIGNQ3IIGZ2NIb_kBRYPiRWJf9MT5OiseFe0-HIAr3pVwRr1zhUxzGTy/pub?output=csv', {
            download: true,
            header: true,
            complete: function (results) {
                setData(results.data)
            }
        })
    }, []);
    console.log(data)

    return (
        <>
            <h1>data from google sheets</h1>
        </>
    );
}
