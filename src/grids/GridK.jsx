import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";

export const GridK = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridK'>
                    <Flower name='gridKChildA'/>
                    <div className='gridKChildB'></div>
                    <div className='gridKChildC'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridK {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(2, 1fr);\n" +
                        "    grid-template-rows: repeat(2, 1fr);\n" +
                        "    grid-template-areas:\n" +
                        "        \"a b\"\n" +
                        "        \"c d\"\n" +
                        "    ;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    grid-area: a;\n" +
                        "    justify-self: end;\n" +
                        "    align-self: end;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}