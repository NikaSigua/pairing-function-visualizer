# Pairing Function Visualizer

This is a simple pairing function visualizer. 

You can access the current version [here](https://www.nikasigua.com/pairing-function-visualizer/).

## What's What


![](src/images/display.png)

### Grid Length

---

The default grid length is set to 12 simply because it is the largest grid size
that can be comfortably rendered in a mobile view. 

When the window is resized, the grid length adjusts to fit in the window. The max grid length is determined by the
size of the window. One hacky way to increase the grid length when it is at its
max is to zoom out of your window, then try incrementing again. These restrictions are
really only put in place to keep the grid inside the screen. 

In the future,
if I can figure out how, I might try to make it so that the grid cells scale down if
the grid length is increased while the grid is already filling the display.

### Starting Number

---

The default starting number depends on the pairing function selected.
Some start at 0, others start at 1. 

Incrementing the starting number
essentially just adds 1 to each cell in the grid. The feature was mostly
intended to be used along with highlighting. For example, when prime highlighting
is toggled on, incrementing the start number makes it easier to visualize the path
they are walking on along the shells of the grid. 

Moreover, incrementing the start number while a highlight is toggled on reconfigures the placement of the highlighted
cells, which can reveal all sorts of patters that weren't obvious before; for
example, if you select Szudzik's pairing function, toggle prime highlighting on, and increment
the start number to 41, you'll find enough motivation to  read about
[Euler's 7 Lucky Numbers](https://en.wikipedia.org/wiki/Lucky_numbers_of_Euler).


### Toggle Highlight Primes

---

By default, prime highlighting is toggled off. When toggled on,
the background of any grid cell holding a prime number will render
white, essentially highlighting them. 

In the future I'll look into adding a feature where, rather than
only highlighting primes, the user will be able to enter a
formula, and all the cells holding a number satisfying the formula
in the grid will be highlighted. For example, if the user selected
the boustrophedonic pairing function and chose to highlight all the
polygonal numbers (the ones satisfying
![f(x)=x^2-x+1](https://latex.codecogs.com/svg.image?%5Ccolor%7Bwhite%7Df(x)%20=%20x%5E%7B2%7D-x&plus;1)
),
the diagonal of the grid would be highlighted. Once that is added, I'll try to
make presets for common/relevant formulas. Lastly, if I can get it to work,
I'll try to make it so that multiple highlights can be toggled on at
the same time.

### Toggle Numerals

---

By default, numerals are toggled on. 

When toggled off,
the color of the numerals are changed to match the background
color, essentially hiding them.
To see this, toggle the numerals
off and make some text selection on the grid with your cursor.
There is an exception; when numerals are toggled off and highlight
primes is toggled on the numerals for the primes are visible.
This is on purpose. 

In the future I'll look into adding a feature where, when numerals
are toggled on, hovering over a grid cell will show numeral.

### Transpose

---

Transpose flips every entry along the diagonal, in other words 

![(i,j) maps to (j,i)](https://latex.codecogs.com/svg.image?%5Ccolor%7Bwhite%7D%5Cbegin%7Bbmatrix%7Da%20&%20b%20%5C%5Cc%20&%20d%20%5C%5C%5Cend%7Bbmatrix%7D%5Cmapsto%20%5Cbegin%7Bbmatrix%7Da%20&%20c%20%5C%5Cb%20&%20d%20%5C%5C%5Cend%7Bbmatrix%7D%20)
### Color Themes

---

The default and recommended color theme is the heatmap. The color for each cell is
determined by the number inside the cell.

There are some issues with the grayscale and red-blue color themes at higher grid lengths.

## Other Resources


### General Information

- [Pairing Functions on Wikipedia](https://en.wikipedia.org/wiki/Pairing_function).
- [Pairing Functions on MathWorld](https://mathworld.wolfram.com/PairingFunction.html).

### Other


- [Kenneth Regan's 1990 *Minimum-Complexity Pairing Functions*](https://pdf.sciencedirectassets.com/272574/1-s2.0-S0022000000X00979/1-s2.0-002200009290027G/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDugZG4me37ASratPYfAbx1O4VaNmJ0wQf6W%2B5HzG8%2BbwIhAIuhSONAeUBhjT5Aj5L7UWdnyeHh0Uhoqfo%2B7Chohr3FKvoDCB4QBBoMMDU5MDAzNTQ2ODY1Igx2fPWBfUKdATenPE8q1wPOykjDlGmyW%2BWZu7z8kWWl1jz6%2BooogInKWrKWbEtqpQCjj1n2Zv0Giu6twxVNd07PRiDcUjNupPyt8BtIeIs%2FE9gFcqS4efDsuQ98BraROVFw%2FawxNQbxCcA8Gc5k3R4vHA06dWDcE8OQ5duvTf4Z1iY%2FWl6gqtfkDmBfZ5ieqh0Xozj4fVAyUgIwQvli1qjUNzk2giYA8zkfVg5ngftKNLPPFRQPJ8qXWbsGV4r3xraz9atyH6hFPb5pag%2Ffj4zbeSinvzsF8KV8XXm21shPTzO2%2B%2FpXjSvtFCVnZd%2BOIU8zLhr8SAs0j6ABl%2FzFaQX6uCsywgEuObatvGhD5TJSodFltITdTlY%2FoyXgAKmBWnZhZq1ullycqEZkqzj9BPRbdBfO%2FRB%2BhWyRC8VmUR2FST32aRswrJUS1NZhLSk4UOfN6mJb4cjtMiupfSSwOpCe%2B3ut3e6Z266YlrqN464qA5fmMb3hFX7exXRiqu9fcFhUZTp6WalkwKN%2FCfhKgiktn4PPyNKBQb%2BXrew4syrna5OfSP4ozaXJ2bA0RiqIbwNZbAaGyX7biZJRYb37aTBvrT5SHqjmiFhma%2FLbSVJ4RAiT1GVxEyvkSXaE521GoLGbE4Tcp%2FswpLyuigY6pAE%2BRdzA1TDL17wx5pLX79LrInv4gf2xmzfDj%2FYZ7jNomhXpHf%2BQx73d12e3WDDCYbfZxO7E9oIouud9v6Bq2xYMpD4Pgf3mmxrcwUzH%2FbBPKOeGkEkIpzc9JpzbQiOmZCdDORez7uBXsxckt6yiZwcCx%2B8P6tncHf%2BaUrWuIEOAlDvi55kIFPw9kDIHuKe%2F7wtQAb2muJsVW0k9suSAqpHXGqvSrw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210922T225501Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYSEK3H3U6%2F20210922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4355423fcb9a551eba1f6ff514f5f9a6e5a081abab4be3b2b7b93132e57978db&hash=dfb796236cac5c1e4dac302fb149fd56ddc7e4efcdd5fc715a8a15a0e0f96c6b&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=002200009290027G&tid=spdf-dae7b58d-7ec0-4158-9e5a-b02f5dafcb48&sid=4d6094352662364aa0289a000a293306f326gxrqa&type=client).

