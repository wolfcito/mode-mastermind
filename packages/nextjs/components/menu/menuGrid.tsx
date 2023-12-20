import { useId } from "react";
import { useRouter } from "next/router";
import { DidacticContentCards } from "~~/constants/didacitc-contnet.constants";
import styles from "~~/styles/carousel-didactic-content.module.css"
import { Button } from "../button";
import clsx from 'clsx'
import Image from "next/image";

const MenuMain = () => {
    const idMenuMain = useId();
    const router = useRouter()

    return (
        <section className="flex flex-row flex-wrap w-full justify-center wap-1">
            {
                DidacticContentCards.map(
                    (content, index) => (
                        <>
                            <div
                                className={clsx('max-w-sm card card-compact shadow-lg shadow-secondary')}
                            >
                                <figure className="z-10">
                                    <Image
                                        src={content.img.path}
                                        alt={`${content.title} image`}
                                        className={clsx(
                                            'object-cover h-60 drop-shadow-[0_35px_35px_rgba(223,254,0,1)] max-w-sm pt-4 w-full'
                                        )}
                                        width={150}
                                        height={150}
                                    />
                                </figure>
                                <div className="space-y-3 card-body">
                                    <div className="flex items-center justify-center">
                                        <p className="p-0 m-0 text-xl font-semibold">{content.title}</p>
                                        <div className="flex flex-wrap mt-1 space-x-2">
                                            <span className="py-3 badge badge-primary">
                                                {content.attributes.area}
                                            </span>

                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center mt-1 flex-1">
                                        <p className="my-0 text-base font-light">{content.description}</p>
                                    </div>
                                    <div className="px-10 pt-4 pb-2 flex justify-center items-end">
                                        <Button label="START!" onClick={() => { router.push(`content-didactic/${content.id}`) }} />
                                    </div>
                                </div>
                            </div>
                            {/*<div className={`max-w-xs rounded overflow-hidden shadow-lg border border-white rounded m-10 ${styles.itemMenu}`}
                            key={`${idMenuMain}-${index}-${content.id}`}>
                            <img className="w-full h-64 p-6"  src={content.img.path} alt={content.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{content.title}</div>
                                <p className="text-gray-100 text-base">
                                    {content.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Button label="START!" onClick={() => { router.push(`content-didactic/${content.id}`) }} />
                            </div>
                    </div>*/}
                        </>
                    )
                )}
        </section>

    );
}

export default MenuMain;