const mongoose = require("mongoose");

var quotationSchema = new mongoose.Schema(
  {
    homeOwnerId: { type: mongoose.Schema.Types.ObjectId },
    selectedDesigners: [{ type: mongoose.Schema.Types.ObjectId }],
    propertyType: { type: String },
    bhk: { type: Number },
    carpetArea: { type: String },
    workAreas: {
      livingRoom: { type: Number },
      dinningRoom: { type: Number },
      bedRoom: { type: Number },
      kitchen: { type: Number },
      pujaRoom: { type: Number },
      homeOffice: { type: Number },
      balcony: { type: Number },
      bathroom: { type: Number },
    },
    livingDinning: {
      sofaSetAndTables: {
        sideTable: { type: Boolean, default: false },
        centreTable: { type: Boolean, default: false },
        accentChair: { type: Boolean, default: false },
        twoSeaterSofa: { type: Boolean, default: false },
        threeSeaterSofa: { type: Boolean, default: false },
      },
      tvUnit: { type: Boolean, default: false },
      barCabinet: { type: Boolean, default: false },
      consoles: { type: Boolean, default: false },
      crockeryUnit: { type: Boolean, default: false },
      diningTablesAndChairs: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      partitionWorkAndDesignerPartition: { type: Boolean, default: false },
      wallCoveringETC: { type: Boolean, default: false },
      doorAndUPVCWindows: { type: Boolean, default: false },
      floorTilingAndStoneFlooring: { type: Boolean, default: false },
    },
    bedroom: [{
      bedsAndSideTable: {
        kingSizeBed: { type: Boolean, default: false },
        queenSizeBed: { type: Boolean, default: false },
      },
      wardrobe: {
        swingDoor: { type: Boolean, default: false },
        slidingDoor: { type: Boolean, default: false },
      },
      tvUnit: { type: Boolean, default: false },
      accentChair: { type: Boolean, default: false },
      studyTableAndChair: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      partitionWorkAndDesignerPartition: { type: Boolean, default: false },
      wallCoveringETC: { type: Boolean, default: false },
      doorAndUPVCWindows: { type: Boolean, default: false },
      floorTilingAndStoneFlooring: { type: Boolean, default: false },
    }],
    kitchen: [{
      modularKitchen: { type: Boolean, default: false },
      dismantlingWork: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      tilingAndStoneWorks: { type: Boolean, default: false },
      plumbingWorks: { type: Boolean, default: false },
      doorAndUPVCWindows: { type: Boolean, default: false },
    }],
    bathroom: [{
      vanityCupboards: { type: Boolean, default: false },
      wallsAndFloorTiles: { type: Boolean, default: false },
      plumbing: { type: Boolean, default: false },
      glassPartitions: { type: Boolean, default: false },
      dismantlingWork: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      doorAndUPVCWindows: { type: Boolean, default: false },
    }],
    pujaRoom: {
      mandirUnit: { type: Boolean, default: false },
      mandirPartition: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      tilingAndStoneWorks: { type: Boolean, default: false },
      mandirChaukhat: { type: Boolean, default: false },
    },
    balcony: [{
      landscapingGardening: { type: Boolean, default: false },
      floorTiles: { type: Boolean, default: false },
      outdoorFurniture: { type: Boolean, default: false },
      dismantlingWork: { type: Boolean, default: false },
    }],
    homeOffice: {
      studyTable: { type: Boolean, default: false },
      studyChair: { type: Boolean, default: false },
      bookCase: { type: Boolean, default: false },
      falseCeiling: { type: Boolean, default: false },
      dismantlingWork: { type: Boolean, default: false },
      floorTile: { type: Boolean, default: false },
      doorAndUPVCWindows: { type: Boolean, default: false },
    },
    miscellaneousWork: {
      paintWork: {
        moderatePainting: { type: Boolean, default: false },
        fullHousePainting: { type: Boolean, default: false },
      },
      electricalWiring: {
        limitedWiring: { type: Boolean, default: false },
        completeWiring: { type: Boolean, default: false },
      },
      AcWorks: {
        livingRoom: { type: Boolean, default: false },
        bedroom: { type: Boolean, default: false },
        bathroom: { type: Boolean, default: false },
        kitchen: { type: Boolean, default: false },
        pujaRoom: { type: Boolean, default: false },
        homeOffice: { type: Boolean, default: false },
        balcony: { type: Boolean, default: false },
      },
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Quotation", quotationSchema);
