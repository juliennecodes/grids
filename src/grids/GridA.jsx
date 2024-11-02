import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";

export const GridA = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridA'>
                    <div className='gridAChildA'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridA {\n" +
                        "    display: grid;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}