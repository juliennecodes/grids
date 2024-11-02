import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridN = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridN'>
                    <Flower name='gridNFlower'/>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridN {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(2, 1fr);\n" +
                        "    grid-template-rows: repeat(2, 1fr);\n" +
                        "    grid-template-areas:\n" +
                        "        \"a b\"\n" +
                        "        \"c d\"\n" +
                        "    ;\n" +
                        "    justify-items: center;\n" +
                        "    align-items: center;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    grid-area: b;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>
    )
}