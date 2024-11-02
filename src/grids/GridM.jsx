import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridM = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridM'>
                    <Bunny name='gridMBunny' />
                    <Flower name='gridMFlower'/>
                    <Star name='gridMStar'/>
                    <Strawberry name='gridMStrawberry' />
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridM {\n" +
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
                        ".bunny {\n" +
                        "    grid-area: a;\n" +
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
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}