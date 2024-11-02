import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridH = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridH'>
                    <Bunny />
                    <Strawberry />
                    <Flower name='gridHChild'/>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridH {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: 1fr;\n" +
                        "    justify-items: center;\n" +
                        "}\n" +
                        "\n" +
                        ".flower {\n" +
                        "    justify-self: end;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}