import NavAside from "@/components/layouts/NavAside";
import NavTop from "@/components/layouts/NavTop";

export default function Home() {
  return (
    <div className="font-inter style-en false z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0 3xl:p-10 3xl:pb-0 3xl:fixed 3xl:inset-x-0">
      <div className="relative grid gap-6 sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px]">
        <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
          <NavAside className="w-64 h-full overflow-y-auto bg-white shadow-lg" />
        </div>
        <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]">
          <NavTop className="bg-white shadow p-4" />
        </div>
        <div className="md:z-[-3] md-max:flex md-max:w-full lg-min:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full 3xl:gap-x-6 3xl:z-[-16]  grid xs:mx-auto sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
          Main Page Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus odit excepturi tempora, accusamus ipsa, pariatur qui, cum eum
          autem non consequuntur hic! Non voluptatibus temporibus blanditiis
          odio voluptatem animi soluta pariatur laborum exercitationem, omnis
          fuga. Quisquam, dolore animi quis ipsum incidunt delectus nemo, vitae
          explicabo aspernatur aperiam neque eum provident perferendis ipsa
          iusto officiis vel laudantium. Velit error voluptate eius porro sequi
          laboriosam facere modi consequuntur, soluta ea ipsa temporibus
          excepturi totam repellat dicta quae consequatur atque animi
          exercitationem reiciendis aliquid nesciunt. Ea rem vero facere
          blanditiis, ad, dolorum inventore, sed laboriosam modi odit quaerat
          ullam natus. Vitae, tempore architecto! Fuga enim soluta id
          consectetur voluptatibus nostrum amet beatae maiores, eligendi
          necessitatibus dolores quod? Harum excepturi architecto eligendi cum
          officia molestias itaque. Ex ipsum corporis, exercitationem id
          quibusdam dolorum sint blanditiis laboriosam libero perspiciatis quae
          veritatis quisquam, dolores quo atque minima? Voluptas facere
          consequatur, autem laudantium consectetur quidem saepe odit et,
          deleniti possimus perspiciatis placeat ducimus accusamus tempore enim
          ex minima, consequuntur aliquam? Accusamus dolore aliquam, deleniti
          voluptates hic a doloremque et dolorem soluta iusto temporibus magnam
          sint accusantium quas fuga repudiandae labore est nesciunt eos quidem?
          Similique odio, cumque temporibus non, voluptas molestias quae enim
          ratione vel deleniti a!
        </div>
      </div>
    </div>
  );
}
