import {Section} from "../common/Section";
import {GridExampleContainer} from "../common/GridExampleContainer";
import {GridCodeContainer} from "../common/GridCodeContainer";

export const GridE = () => {
    return (
        <Section>
            <GridExampleContainer>
                <div className='gridExample gridE'>
                    <div className='gridEChildA'></div>
                    <div className='gridEChildB'></div>
                    <div className='gridEChildC'></div>
                </div>
            </GridExampleContainer>
            <GridCodeContainer>
                <pre>
                    {".gridE {\n" +
                        "    display: grid;\n" +
                        "    grid-template-columns: 80px auto;\n" +
                        "    grid-template-rows: 48px auto;\n" +
                        "    grid-template-areas:\n" +
                        "        \"header header\"\n" +
                        "        \"sidebar content\"\n" +
                        "    ;\n" +
                        "}\n" +
                        "\n" +
                        ".gridEChildA {\n" +
                        "    background-color: var(--a);\n" +
                        "    grid-area: header;\n" +
                        "}\n" +
                        "\n" +
                        ".gridEChildB {\n" +
                        "    background-color: var(--b);\n" +
                        "    grid-area: sidebar;\n" +
                        "}\n" +
                        "\n" +
                        ".gridEChildC {\n" +
                        "    background-color: var(--c);\n" +
                        "    grid-area: content;\n" +
                        "}"}
                </pre>
            </GridCodeContainer>
        </Section>

    )
}