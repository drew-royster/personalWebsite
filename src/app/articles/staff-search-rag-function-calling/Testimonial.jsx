// Example.js
import newfounding from './newfounding.png'
import Image from "next/image";

export default function Testimonial() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <Image
                    alt=""
                    src={newfounding}
                    className="bg-black"
                />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Drew and Zach at Shaolin AI built the AI query system for our talent placement business. Unlike other platforms that were bloated and overly complex, their product was streamlined, performant and tailored to our needs. Highly recommend their work!”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="mx-auto size-10 rounded-full"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
