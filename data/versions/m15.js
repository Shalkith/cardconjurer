//============================================//
//       Card Conjurer, by Kyle Burton        //
//============================================//
if (version.currentVersion != "m15") {
    //Name, text, x, y, width, height, font, size, color, other
    version.textList = [
                        ["Title", "", scale(64), scale(83), scale(630), 0, "belerenb", scale(37), "black", "oneLine=true"],
                        ["Type", "", scale(64), scale(615), scale(630), 0, "belerenb", scale(33), "black", "oneLine=true"],
                        ["Rules Text", "", scale(64), scale(662), scale(616), scale(292), "mplantin", scale(38), "black", "lineSpace=0.97"],
                        ["Power Toughness", "", scale(587), scale(958), scale(110), 0, "belerenb", scale(38), "black", "oneLine=true,textAlign='center'"]/*,
                                                                                                                                                   ["Flip PT", "", scale(588), scale(902), scale(100), 0, "belerenb", 28, "#666", "oneLine=true,textAlign='right'"]*/
                        ]
    version.frameIndexToInsert = 5;
}
version.currentVersion = "m15"
version.artX = scale(58)
version.artY = scale(118)
version.artWidth = scale(626)
version.artHeight = scale(458)
version.setSymbolRight = scale(684)
version.setSymbolVertical = scale(614)
version.setSymbolWidth = scale(90)
version.setSymbolHeight = scale(40)
version.bottomInfoFunction = "m15BottomInfo"
version.manaCostX = scale(653)
version.manaCostY = scale(60)
version.manaCostDiameter = scale(34)
version.manaCostDistance = scale(-38)
version.manaCostDirection = "horizontal"
version.manaCostVersion = "m15"
version.watermarkWidth = scale(520)
version.watermarkHeight = scale(250)
version.watermarkY = scale(800)
version.masksToAdd = ["Right Half", "Corners", "Full", "Title", "Type", "Rules Text", "Pinline", "Frame", "Border", "Legend", "Legend With Border", "Box Topper"];
filterFramePicker("frameClassRegular");


function m15BottomInfo() {
	//remember to ctrl+f for 'artistBrushWidth' and adjust that when fixing these values!
	bottomInfoContext.clearRect(0, 0, cardWidth, cardHeight)
	bottomInfoContext.writeText(document.getElementById("inputInfoNumber").value + " " + document.getElementById("inputInfoRarity").value + " *Not For Sale*", scale(46), scale(980), scale(329), 0, "gothammedium", scale(17), "white", "oneLine=true")
	bottomInfoContext.writeText(document.getElementById("inputInfoSet").value + "  \u2022  " + document.getElementById("inputInfoLanguage").value + "  {font:belerenbsc}{artistBrush}{fontsize1}" + document.getElementById("inputInfoArtist").value, scale(46), scale(1000), scale(375), 0, "gothammedium", scale(17), "white", "oneLine=true")
	var copyrightShift = 0;
	for (var i = 0; i < cardMaster.children.length; i++) {
		if (parseInt(cardMaster.children[i].id.replace("frameIndex", "")) >= 0 && frameList[parseInt(cardMaster.children[i].id.replace("frameIndex", ""))].image.src.includes("PT") && !frameList[parseInt(cardMaster.children[i].id.replace("frameIndex", ""))].framePickerClasses.includes("frameClassCustom")) {
			copyrightShift = scale(19);
		}
	}
	bottomInfoContext.writeText(creditColor + "\u2122 & \u00a9 " + date.getFullYear() + " Wizards of the Coast", cardWidth / 2, scale(980 + copyrightShift), scale(322), 0, "mplantin", scale(17), "white", "oneLine=true,textAlign='right'")
	cardImageUpdated()
}
// setTimeout(m15BottomInfo, 250)

finishChangingVersion("data/images/imageCSV.csv")
