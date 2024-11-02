import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridI = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridI'>
                    <Bunny />
                    <Strawberry />
                    <Flower />
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridI {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(3, 1fr);\n" +
                        "    align-items: center;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}