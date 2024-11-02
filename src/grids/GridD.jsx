import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";

export const GridD = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridD'>
                    <div className='gridDChildA'></div>
                    <div className='gridDChildB'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridD {\n" +
                        "    display: grid;\n" +
                        "    grid-template-rows: 48px auto;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}