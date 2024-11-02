import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";

export const GridB = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridB'>
                    <div className='gridBChildA'></div>
                    <div className='gridBChildB'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridB {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: 1fr 2fr;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}