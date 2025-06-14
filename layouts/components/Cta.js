import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              {cta.button.enable && (
                <Link
                  className="btn btn-outline"
                  href={cta.button.link}
                  rel={cta.button.rel}
                >
                  {cta.button.label}
                </Link>
              )}
              
              {cta.express_button?.enable && (
                <Link
                  className="btn btn-primary"
                  href={cta.express_button.link}
                  rel={cta.express_button.rel}
                >
                  {cta.express_button.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
