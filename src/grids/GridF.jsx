import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Strawberry} from "../common/Strawberry";
import {Bunny} from "../common/Bunny";

export const GridF = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridF'>
                    <Bunny name='gridFChildA'/>
                    <Strawberry name='gridFChildB' />
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridF {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(3, 80px);\n" +
                        "    grid-template-rows: repeat(4, 60px);\n" +
                        "    grid-template-areas:\n" +
                        "        \"v v v\"\n" +
                        "        \"w w contentA\"\n" +
                        "        \"x contentB y\"\n" +
                        "        \"z z z\"\n" +
                        ";\n" +
                        "}\n" +
                        "\n" +
                        ".bunny { grid-area: contentA; }\n" +
                        "\n" +
                        ".strawberry { grid-area: contentB; }"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}