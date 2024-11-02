import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridO = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridO'>
                    <div className='gridOFlowerContainer'>
                        <Flower name='gridOFlower'/>
                    </div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridO {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(2, 1fr);\n" +
                        "    grid-template-rows: repeat(2, 1fr);\n" +
                        "    grid-template-areas:\n" +
                        "        \"a b\"\n" +
                        "        \"c d\"\n" +
                        "    ;\n" +
                        "}\n" +
                        "\n" +
                        ".flowerContainer {\n" +
                        "    grid-area: b;\n" +
                        "    display: grid;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    /* no bg colour so doesn't look like it shrunk */\n" +
                        "    /* but it shrunk */\n" +
                        "    justify-self: center;\n" +
                        "    align-self: center;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>
    )
}