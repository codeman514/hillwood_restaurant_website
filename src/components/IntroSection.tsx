interface IntroSectionProps {
imgUrl:string;
content:string;
reverse?:boolean;
}
export default function IntroSection({imgUrl,content,reverse}:IntroSectionProps) {
    return (
        <section>
            <div className={`d-flex custom-intro-section ${reverse?"flex-row-reverse":""}`}>
                <img className="col-6" src={imgUrl}/>
                <h1 className="col-6 bg-black text-white mb-0">{content}</h1>
            </div>
        </section>
    )
}