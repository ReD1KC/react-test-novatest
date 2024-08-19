import ActorsBlock from "./components/ActorsBlock";
import CadrsBlock from "./components/CadrsBlock";
import FooterBlock from "./components/FooterBlock";
import HeaderBlock from "./components/HeaderBlock";
import MainBlock from "./components/MainBlock";
import MapBlock from "./components/MapBlock";
import Subscribe from "./components/Subscribe";

export default function Home() {
    return (
        <>
            <header>
                <HeaderBlock />
            </header>
            <main className="flex flex-col gap-y-18 bg-[#181818]">
                <MainBlock description="Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ." />
                <ActorsBlock />
                <CadrsBlock />
                <MapBlock />
            </main>
            <footer>
                <FooterBlock />
            </footer>
            {/* <Subscribe /> */}
        </>
    );
}
