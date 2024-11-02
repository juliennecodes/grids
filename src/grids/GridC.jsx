import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";

export const GridC = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridC'>
                    <div className='gridCChildA'></div>
                    <div className='gridCChildB'></div>
                    <div className='gridCChildC'></div>
                    <div className='gridCChildD'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridC {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: repeat(2, 1fr);\n" +
                        "    grid-template-rows: repeat(2, 1fr);\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}