import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";
import {Bunny} from "../common/Bunny";
import {Flower} from "../common/Flower";
import {Star} from "../common/Star";
import {Strawberry} from "../common/Strawberry";

export const GridG = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridG'>
                    <Bunny />
                    <Strawberry />
                    <Flower />
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridG {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: 1fr;\n" +
                        "    justify-items: center;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}