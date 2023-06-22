import "./../css/cursed/index.css"
import React, { useEffect, useState } from "react";
import { Top } from "../components/top-page-cursed-items";
import { attributes } from "../type/type";
import { defaultValueAttributes } from "../type/defaultvalue";

export const Cursed = () => {
    const [Images, setImages] = useState<attributes[]>([])
    const [imageEnCours, setImagesEnCours] = useState<attributes>(defaultValueAttributes)
    useEffect(() => {
        fetch(process.env.REACT_APP_API_UPLOADS_URL + '/api/imagecurseds?populate=*')
            .then(response => response.json())
            .then(data => { 
                const tabEnCours = data.data
                tabEnCours.sort((a: attributes['attributes'], b:attributes['attributes']) => (a.id > b.id ? 1 : -1))
                setImages(tabEnCours) 
            })
    }, [])

    const [itemModal, setItemModal] = useState<boolean>(false);
    const toggleImage = (imageEnCours: attributes) => {
        setImagesEnCours(imageEnCours)
        toggleItemModal()
    };
    const toggleItemModal = () => {
        setItemModal(!itemModal)
    };
    return (
        <>
            <Top />
            <section className="items-padding">
                {Images.map((val, index) =>
                    <div className="items" onClick={() => { toggleImage(val) }} key={index} style={{
                        backgroundImage: `url(${process.env.REACT_APP_API_UPLOADS_URL + "" + val.attributes.image.data[0].attributes.url})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}>
                    </div>
                )}
            </section>
            {itemModal && (
                <div className="modal">
                    <div onClick={() => toggleItemModal()} className="overlay"></div>
                    <div className="modal-content-items">
                        <h1>{imageEnCours.attributes.title}</h1>
                        <div className="bg-modal-item" style={{
                            backgroundImage: `url(${process.env.REACT_APP_API_UPLOADS_URL + "" + imageEnCours.attributes.image.data[0].attributes.url})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}></div>
                        <div className="text-item" dangerouslySetInnerHTML={{ __html: imageEnCours.attributes.description }}></div>
                    </div>
                </div>
            )}
        </>
    )
}