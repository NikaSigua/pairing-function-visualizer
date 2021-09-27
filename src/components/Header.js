import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
`;

const StyledSummary = styled.summary`
  font-family: Georgia, serif;
  font-weight: bold;
  outline: none;
`;

const StyledArticle = styled.article`
  margin-bottom: 10px;
  border: black 1px solid;
  box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 10px;
`;

const Indented = styled.div`
  padding-left: 17px;
  margin: 0 0 0 0;
  text-wrap: normal;
`;

const I = styled.span`
  font-family: italic, serif;
`;


const Header = () => {
    return (
        <StyledHeader>
            <StyledArticle>
                <details>
                    <StyledSummary>What is a pairing function?</StyledSummary>
                    <Indented>
                        Pairing functions uniquely encode two numbers into one. One of their most well known uses is in showing
                        that the natural numbers <br/>  and the rational numbers have the same cardinality, but there are other
                        practical applications as well, such as dovetailing.
                    </Indented>
                </details>
                <details>
                    <StyledSummary>How does this work?</StyledSummary>
                    <Indented>
                        Once you pick a pairing function from the first dropdown below,
                        default settings for that pairing function will be rendered. <br/>
                        From there, the best way to get a sense of how this works is to press some buttons,
                        but just in case, here is some documentation:
                        <details>
                            <StyledSummary>Grid Length</StyledSummary>
                            <Indented>
                                The default grid length is set to 12 simply because it is the largest grid size
                                that can be comfortably rendered in a mobile view. Also, when the window is
                                resized, <br/>
                                the grid length adjusts to fit in the window. The max grid length is determined by the
                                size of the window. One hacky way to increase the grid length when it is <br/> at its
                                max is to zoom out of your window, then try incrementing again. These restrictions are
                                really only put in place to keep the grid inside the screen. In the <br/> future,
                                if I can figure out how, I might try to make it so that the grid cells scale down if
                                the grid length is increased while the grid is already filling the display.<br/>
                            </Indented>
                        </details>
                        <details>
                            <StyledSummary>Starting Number</StyledSummary>
                            <Indented>
                                The default starting number depends on the pairing function selected.
                                Some start at 0, others start at 1. Incrementing the starting number
                                essentially <br/> just adds 1 to each cell in the grid. The feature was mostly
                                intended to be used along with highlighting; for example, when prime highlighting
                                is toggled <br/> on, incrementing the start number makes it easier to visualize the path
                                they are walking on along the shells of the grid. Moreover, incrementing the start <br/>
                                number while a highlight is toggled on reconfigures the placement of the highlighted
                                cells, which can reveal all sorts of patters that weren't obvious before; <br/> for
                                example,
                                if you select Szudzik's pairing function, toggle prime highlighting on, and increment
                                the start number to 41, you'll find enough motivation to <br/> read about &nbsp;
                                <a style={{color: 'grey', textDecoration: 'none', fontWeight: 'bold'}}
                                   href="https://en.wikipedia.org/wiki/Lucky_numbers_of_Euler">
                                    Euler's 7 Lucky Numbers
                                </a>. In the future I intend to replace the ticker with a slider.
                            </Indented>
                        </details>
                        <details>
                            <StyledSummary>Toggle Highlight Primes</StyledSummary>
                            <Indented>
                                By default, prime highlighting is toggled off. When toggled on,
                                the background of any grid cell holding a prime number will render
                                white, essentially <br/> highlighting them.
                                <br/>
                                In for future I'll look into adding a feature where, rather than
                                only highlighting primes, the user will be able to enter a
                                formula, and all the cells holding <br/> a number satisfying the formula
                                in the grid will be highlighted. For example, if the user selected
                                the boustrophedonic pairing function and chose to <br/> highlight all the
                                polygonal numbers (the ones satisfying
                                &nbsp;<I>f</I> (<I>x</I>) = <I>x</I><sup>2</sup> - <I>x</I> + 1),
                                the diagonal of the grid would be highlighted. Once that is added, I'll try to <br/>
                                make presets for common/relevant formulas. Lastly, if I can get it to work,
                                I'll try to make it so that multiple highlights can be toggled on at
                                the same time.
                            </Indented>
                        </details>
                        <details>
                            <StyledSummary>Toggle Numerals</StyledSummary>
                            <Indented>
                                By default, numerals are toggled on. When toggled off,
                                the color of the numerals are changed to match the background
                                color, essentially hiding them.
                                <br/>
                                To see this, toggle the numerals
                                off and make some text selection on the grid with your cursor.
                                <br/>
                                There is an exception; when numerals are toggled off and highlight
                                primes is toggled on the numerals for the primes are visible.
                                This is on purpose.
                                <br/>
                                In the future I'll look into adding a feature where, when numerals
                                are toggled on, hovering over a grid cell will show numeral.
                            </Indented>
                        </details>
                        <details>
                            <StyledSummary>Transpose</StyledSummary>
                            <Indented>
                                Transpose flips every entry along the diagonal, in other words (<I>i</I>,<I>j</I>) maps
                                to (<I>j</I>,<I>i</I>).
                            </Indented>
                        </details>
                        <details>
                            <StyledSummary>Color Themes</StyledSummary>
                            <Indented>
                                The default and recommended color theme is the heatmap. The color for each cell is
                                determined by the number inside of the cell. There are some issues with the <br/>
                                grayscale and red-blue color themes at higher grid lengths.
                            </Indented>
                        </details>
                    </Indented>
                </details>
            </StyledArticle>


        </StyledHeader>
    );
};

export default Header;
