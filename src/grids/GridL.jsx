import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridL = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridL'>
                    <Bunny name='gridLBunny' />
                    <Flower name='gridLFlower'/>
                    <Star name='gridLStar'/>
                    <Strawberry name='gridLStrawberry' />
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridL {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(2, 1fr);\n" +
                        "    grid-template-rows: repeat(2, 1fr);\n" +
                        "    grid-template-areas:\n" +
                        "        \"a b\"\n" +
                        "        \"c d\"\n" +
                        "    ;\n" +
                        "}\n" +
                        "\n" +
                        ".bunny {\n" +
                        "    grid-area: a;\n" +
                        "    justify-self: end;\n" +
                        "    align-self: end;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    grid-area: b;\n" +
                        "\n" +
                        "}\n" +
                        "\n" +
                        ".star {\n" +
                        "    grid-area: c;\n" +
                        "}\n" +
                        "\n" +
                        ".strawberry {\n" +
                        "    grid-area: d;\n" +
                        "    justify-self: end;\n" +
                        "    align-self: start;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}