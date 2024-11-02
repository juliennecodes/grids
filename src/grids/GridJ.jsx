import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridJ = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridJ'>
                    <Bunny />
                    <Strawberry />
                    <Flower name='gridJChild'/>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridJ {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(3, 1fr);\n" +
                        "    align-items: center;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    align-self: end;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}