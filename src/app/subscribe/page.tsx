"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import FooterBlock from "@/components/FooterBlock";
import { useRouter } from "next/navigation";

const errorClass = "bg-[#FF5858]";

const Subscribe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        console.log(data);

        router.push("/subscribe+");
    };

    return (
        <>
            <div className="flex w-full flex-col bg-[#181818] px-30 pt-6">
                <div className="flex">
                    <a href="http://localhost:3000">
                        <Image
                            src="/images/image 24.svg"
                            alt=""
                            width={130}
                            height={44}
                        />
                    </a>
                </div>
                <div className="flex gap-x-32">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex w-2/3 flex-col"
                    >
                        <div className="flex">
                            <h1 className="flex pt-16 text-white">
                                Оставить заявку
                            </h1>
                        </div>
                        <div className="flex flex-col gap-y-8 pt-12">
                            <div className="flex flex-col">
                                <select
                                    {...register("city", {
                                        required: "",
                                    })}
                                    className={`w-full border-2 border-black py-4.5 pl-6 text-white ${errors.city ? errorClass : "bg-[#343338]"}`}
                                >
                                    <option value="" disabled>
                                        Выберите город
                                    </option>
                                    <option value="Москва">Москва</option>
                                    <option value="Санкт-Петербург">
                                        Санкт-Петербург
                                    </option>
                                    <option value="Новосибирск">
                                        Новосибирск
                                    </option>
                                    <option value="Екатеринбург">
                                        Екатеринбург
                                    </option>
                                    <option value="Казань">Казань</option>
                                </select>
                                {errors.city && (
                                    <p className="mt-2 text-red-500">
                                        Поле не заполненно
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <input
                                    {...register("name", {
                                        required: "",
                                    })}
                                    type="text"
                                    className={`w-full border-2 border-black py-4.5 pl-6 text-white ${errors.name ? errorClass : "bg-[#343338]"}`}
                                    placeholder="Имя"
                                />
                                {errors.name && (
                                    <p className="mt-2 text-red-500">
                                        Поле не заполненно
                                    </p>
                                )}
                            </div>

                            <div className="flex w-full gap-x-6">
                                <div className="flex w-full flex-col">
                                    <input
                                        {...register("email", {
                                            required: "Email обязателен",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "",
                                            },
                                        })}
                                        type="text"
                                        className={`w-full border-2 border-black py-4.5 pl-6 text-white ${errors.email ? errorClass : "bg-[#343338]"}`}
                                        placeholder="Email"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-red-500">
                                            Поле не заполненно
                                        </p>
                                    )}
                                </div>

                                <div className="flex w-full flex-col">
                                    <input
                                        {...register("phone", {
                                            required: "Телефон обязателен",
                                            pattern: {
                                                value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                                                message: "",
                                            },
                                        })}
                                        type="text"
                                        className={`w-full border-2 border-black py-4.5 pl-6 text-white ${errors.phone ? errorClass : "bg-[#343338]"}`}
                                        placeholder="+7 (___) __-__-___"
                                    />
                                    {errors.phone && (
                                        <p className="mt-2 text-red-500">
                                            Поле не заполненно
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <input
                                    {...register("note")}
                                    type="text"
                                    className={`h-40 w-full border-2 border-black py-4.5 pl-6 text-white ${errors.note ? errorClass : "bg-[#343338]"}`}
                                    placeholder="Оставить пометку к заказу"
                                />
                                {errors.note && (
                                    <p className="mt-2 text-red-500">
                                        Поле не заполненно
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <input
                                    {...register("file")}
                                    type="file"
                                    className={`w-full border-2 border-black py-4.5 pl-6 text-white ${errors.file ? errorClass : "bg-[#343338]"}`}
                                    placeholder="Прикрепите файл"
                                />
                                {errors.file && (
                                    <p className="mt-2 text-red-500">
                                        Поле не заполненно
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex py-10">
                            <input
                                {...register("consent", {
                                    required: "Согласие обязательно",
                                })}
                                type="checkbox"
                                className={`h-8 w-8 appearance-none border-2 border-gray-400 ${errors.consent ? errorClass : "bg-[#343338]"}`}
                            />
                            <div className="flex pl-7 pt-1 text-white">
                                Даю согласие на обработку своих персональных
                                данных
                            </div>
                        </div>
                        {errors.consent && (
                            <p className="mt-2 text-red-500">
                                Поле не заполненно
                            </p>
                        )}

                        <div className="flex pb-16 pt-4">
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-[#EC3F3F] px-10.5 py-4 text-white transition duration-300 ease-in-out hover:bg-[#FF1E1E] hover:shadow-[0px_2px_24px_rgba(255,30,30,0.5)]"
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col gap-y-8 pt-40">
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Наша горячая линия
                            </p>
                            <h2 className="flex text-white">8 800 38 23 112</h2>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Главный офис
                            </p>
                            <h2 className="flex text-white">
                                г. Москва, Садовническая ул., 80
                            </h2>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="flex text-white opacity-[60%]">
                                Часы работы
                            </p>
                            <h2 className="flex text-white">
                                Пн-Пт с 10:00 до 22:00
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBlock />
        </>
    );
};

export default Subscribe;
