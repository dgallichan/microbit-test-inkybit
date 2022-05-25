let myImage = images.createImage(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    # # # # #
    `)
myImage.showImage(0)
inkybit.clear()
inkybit.drawText(
"Daniel Gallichan",
0,
45,
inkybit.Color.Black,
inkybit.TextSize.Medium
)
inkybit.drawImage(
myImage,
0,
0,
inkybit.Color.Accent,
inkybit.TextSize.Large
)
inkybit.show()
