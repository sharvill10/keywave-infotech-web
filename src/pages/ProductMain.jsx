import React from "react";
import { motion } from "framer-motion";
import ShinhoA3 from "../assets/products/Shinho-A3.png";
import ShinhoX700 from "../assets/products/Shinho-X-700.png";
import X80E from "../assets/products/X-80E.png";
import X500 from "../assets/images/X500.png";
import X600 from "../assets/images/X600.png";
import X950 from "../assets/images/X950.png";
import S16 from "../assets/images/s16.png";
import X50B from "../assets/images/X50B.jpg";
import X55B from "../assets/images/X55B.png";
import S22 from "../assets/images/S22.jpg";

import ProductCategory from "../components/ProductCategory";


const productCategories = [
  {
    category: "Fiber Fusion Splicer",

    products: [
      {
        name: "Shinho A3 Handheld FTTX Fiber Optical Fusion Splicer",
        image: ShinhoA3,
        keyFeatures: [
          "7 seconds splicing & 20 seconds heating",
          "Automatic real-time ARC calibration",
          "Water-resistant, anti-shock, and dust-proof",
          "Inductive automatic heater with touch screen GUI",
          "Suitable for bare fiber, pigtails, and drop cables",
          "Best for FTTx, FTTH, CATV projects",
        ],
        technicalSpecifications: {
          model: "A3",
          condition: "New",
          applicableFiber:
            "SM (ITU-T G.652), MM (ITU-T G.651), DS (ITU-T G.653), others",
          operateMode: "Manual, Automatic",
          typicalSplicingTime: "8 Seconds",
          heatingTime: "26 Seconds for 60mm, 40mm Shrinkable Sleeve",
          tensionTest: "1.8~2.2n",
          interface: "GUI Menu Interface, Easy Operation",
          batteryCapacity: "5800mAh, approx. 200 fusion and heating cycles",
          dimensions: "149mm x 120mm x 127mm",
          weight: "1.9kg",
          pasImageDigitalSystem: "Core to Core Alignment",
          operationLanguage: "English, Russian, Portuguese, etc.",
          productionCapacity: "5000 units/Month",
        },
        packaging: {
          packageSize: "43.00cm x 37.00cm x 26.00cm",
          grossWeight: "6.5kg",
          delivery:
            "Delivery within 3 working days for small orders after full payment. For bulk orders, consult with us.",
        },
        afterSalesService: {
          warranty: "1 year for splicers, 6 months for other parts",
          support:
            "Lifelong technical support with free repairs or replacement of defective parts during warranty. After warranty, only parts cost charged.",
        },
      },
      {
        name: "Shinho X700 Multi-Function Automatic Fiber Fusion Splicer",
        image: ShinhoX700,
        keyFeatures: [
          "6 seconds splicing & 26 seconds heating",
          "250x fiber core magnification",
          "Integrated heater with USB port for updates and data exports",
          "ARC calibration based on temperature and air pressure",
          "Durable with rubber armor for shock and water resistance",
          "Suitable for FTTx/FTTH projects",
        ],
        technicalSpecifications: {
          model: "X-700",
          condition: "New",
          applicableFiber:
            "SM (G.652), MM (G.651), DS (G.653), NZDS (G.655), others",
          alignmentMode: "Core to Core Alignment",
          operatingCondition:
            "Altitude: 0-5000m, Humidity: 0-95%, Temperature: -",
          typicalSplicingTime: "6 Seconds",
          heatingTime: "26 Seconds",
          batteryCapacity: "5800mAh",
          dimensions: "149mm x 120mm x 127mm",
          weight: "1.9kg (with battery)",
          electrodesLifeTime: "More than 4000 times",
          fiberTypes: "Naked Fiber, Pigtail, Patch Cords, Drop Cable, etc.",
          productionCapacity: "7000 Units/Year",
        },
        packaging: {
          packageSize: "43.00cm x 37.00cm x 26.00cm",
          grossWeight: "6.5kg",
          delivery:
            "Delivery within 3 working days for small orders after full payment. For bulk orders, consult with us.",
        },
        afterSalesService: {
          warranty: "1 year for splicers, 6 months for other parts",
          support:
            "Lifelong technical support with free repairs or replacement of defective parts during warranty. After warranty, only parts cost charged.",
        },
      },
      {
        name: "Shinho X800 Multi-Function Automatic Fiber Fusion Splicer",
        image: X80E,
        keyFeatures: [
          "6 seconds splicing & 20 seconds heating",
          "250x fiber core magnification",
          "Integrated heater with USB for updates",
          "ARC calibration automatically by temperature and air pressure",
          "Strong protection with 360° rubber armor",
          "Ideal for bare fibers, skin line cables, jumper cables",
        ],
        technicalSpecifications: {
          model: "X-800",
          condition: "New",
          applicableFiber: "SM(G.652), MM(G.651), DS(G.653), NZDS(G.655)",
          fiberCount: "Single",
          typicalSpliceLoss: "0.02dB(SM), 0.01dB(MM), 0.04dB(DS), 0.04dB(NZDS)",
          returnLoss: ">60dB",
          splicingProgram: "40 Groups",
          operateMode: "Manual, Automatic",
          autoHeating: "Available",
          typicalSplicingTime: "6 Seconds",
          tubeHeatingTime: "20 Seconds for 60mm and 40mm Shrinkable Sleeves",
          storageOfSpliceResult: "4000 Results",
          warranty: "3 Years",
          transportPackage: "Carton",
          specification: "47x39x30cm",
          trademark: "Shinho",
          origin: "China",
          hsCode: "8515809090",
          productionCapacity: "500/Month",
        },
        packaging: {
          packageSize: "43.00cm x 37.00cm x 26.00cm",
          grossWeight: "6.5kg",
          delivery:
            "Delivery within 3 working days for small orders after full payment. For bulk orders, consult with us.",
        },
        afterSalesService: {
          warranty: "1 year for splicers, 6 months for other parts",
          support:
            "Lifelong technical support with free repairs or replacement of defective parts during warranty. After warranty, only parts cost charged.",
        },
      },
     
      
      {
        name: "Shinho S-16 Fast and Stable Easy Operation Multi-Function Splicing Machine",
        image: S16,
        keyFeatures: [
          "6s for splicing and 18s for heating",
          "Core to core alignment technology",
          "Anti-shock, Anti-dust and waterproof",
          "Automatic ARC value & position calibration",
          "USB port for software updating and data records exporting",
          "5800mAh Li-battery, more than 220 cycles splicing&heating",
          "Multi-function holder clamps, apply to bare fiber,pigtail,patch cords, drop cable etc."
        ],
        technicalSpecifications: {
          model: "S-16",
          applicableFiber: "SM(G.652), MM(G.651), DS(G.653), NZDS(G.655), others(including G.657)",
          diameterOfCladding: "80 -150μm",
          diameterOfCoating: "160 - 900μm",
          typicalSpliceLoss: "SM:0.02dB, MM:0.01dB, DS:0.04dB, NZDS:0.04dB",
          returnLoss: ">60db",
          fiberCleavedLength: "10-16mm (coating diameter< 250μm ), 16mm(coating diameter: 250-1000μm )",
          splicingProgram: "40 groups",
          operateMode: "Manual, Automatic",
          autoHeating: "Available",
          typicalSplicingTime: "6 seconds",
          tubeHeatingTime: "18 seconds for 60mm and 40mm shrinkable sleeves",
          fiberViewMagnification: "250X(X or Y view), 125X(X and Y view)",
          viewingMethodAndDisplay: "2 CMOS cameras, 4.3 inch color LCD monitor",
          storageOfSpliceResult: "4000 results",
          lossEvaluation: "Available",
          tensionTest: "1.8-2.2N",
          interface: "GUI menu interface, easier operation",
          batteryCapacity: "5800mAh Li-battery, typical 220 cycles(splice and tube heat)",
          powerSupply: "Adaptor, input: AC100-240V(50/60HZ),output: DC11-13.5V",
          electrodeLife: "More than 4000 ARC discharges, can be replaced conveniently",
          terminals: "USB 2.0 port, for uploading splice results and upgrading software",
          operatingCondition: "Altitude: 0-5000m, Humidity: 0-95%, Temperature: -10ºC~+50ºC;Wind speed: max 15m/s",
          dimension: "160mm(L)x136mm(W)x140mm(H)",
          weight: "2.20kg including battery"
        },
        packaging: {
          packageSize: "43cm*37cm*27cm",
          grossWeight: "6.5kg"
        },
        afterSalesService: {
          warranty: "24 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      },
      {
        name: "Shinho X-500 ",
        image: X500,
        keyFeatures: [
          "Handheld, Small, Light",
          "Industrial standard screen",
          "Various colors are available",
          "Core to core digital alignment",
          "7s splicing time, 26s tube heating time",
          "5200mAh and pluggable Li-battery, Typical 250 cycles",
          "ARC calibrated by temperature and air pressure automatically",
          "Automatically switching on windshield and heater in 4 steps",
          "Apply to bare fibers, indoor cables and jumper wires splicing"
        ],
        technicalSpecifications: {
          model: "X-500",
          applicableFiber: "SM(G.652), MM(G.651), DS(G.653), NZDS(G.655), others(including G.657)",
          fiberCount: "Single",
          applicableFiberDimensions: "Cladding diameter: 80 -150μm, Coating diameter: 160 -3000μm",
          typicalSpliceLoss: "0.02dB(SM), 0.01dB(MM), 0.04dB(DS), 0.04dB(NZDS)",
          returnLoss: ">60db",
          fiberCleavedLength: "10-16mm (coating diameter< 250μm ), 16mm(coating diameter: 250-1000μm )",
          splicingProgram: "40 groups",
          operateMode: "Manual, Automatic",
          autoHeating: "Available",
          typicalSplicingTime: "7 seconds",
          tubeHeatingTime: "26 seconds for 60mm and 40mm shrinkable sleeves",
          fiberViewMagnification: "320X(X or Y view), 160X(X and Y view)",
          viewingMethodAndDisplay: "2 CMOS cameras, 4.3 inch color touch screen monitor",
          storageOfSpliceResult: "800 results",
          lossEvaluation: "Available",
          tensionTest: "1.8-2.2N",
          interface: "GUI menu interface, easier operation",
          batteryCapacity: "5200mAh, typical 250 cycles(splice and tube heat), pluggable inner Li-battery",
          powerSupply: "Adaptor, input: AC100-240V(50/60HZ)",
          electrodeLife: "More than 4000 ARC discharges, can be replaced conveniently",
          terminals: "USB 2.0 port, for uploading splice results and upgrading software",
          operatingCondition: "Altitude: 0-5000m, Humidity: 0-95%, Temperature: -10ºC~+50ºC;Wind speed: max 15m/s",
          dimension: "149mm(L)x120mm(W)x127mm(H)",
          weight: "1.9kg including battery"
        },
        packaging: {
          packageSize: "45.00cm * 38.00cm * 27.00cm",
          grossWeight: "7.500kg"
        },
        afterSalesService: {
          warranty: "36 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      },
      {
        name: "Shinho X-600 Mini Fusion Splicer Kit",
        image: X600,
        keyFeatures: [
          "PAS image digital processing system, core to core alignment",
          "Arc calibrated by temperature and pressure parameters",
          "7 seconds typical splicing and 26 seconds heating time",
          "Metro style GUI, easy operation",
          "Intelligent operation, auto heating and fusing",
          "High definition 4.3'' colorful LCD",
          "High capacity and pluggable battery, long work time",
          "USB port for software upgraded online"
        ],
        technicalSpecifications: {
          model: "X-600",
          applicableFibers: "SM (ITU-T G.652), MM (ITU-T G.651), DS (ITU-T G.653), NZDS (ITU-TG.655), others(including G.657)",
          claddingDiameter: "80 -150μm",
          coatingDiameter: "160 - 900μm",
          typicalSpliceLoss: "SM 0.02dB, MM 0.01dB, DS 0.04dB, NZDS 0.04dB",
          returnLoss: "<60dB",
          cleavedLength: "10~16mm ( Diameter of coating < 250μm ) ; 16mm ( Diameter of coating 250~1000μm )",
          splicingProgram: "40 groups",
          operateMode: "Manual, Automatic",
          autoHeat: "Available",
          typicalSplicingTime: "7 seconds",
          heatingTime: "26 seconds for 60mm, 40mm shrinkable sleeve",
          magnification: "250 times for single display, 125 times for double display",
          photoelectricSystem: "Two high sensitive cameras, 4.3' 480×280 colorful LCD",
          splicingDataRecord: "Storing up to 4000 groups of records",
          lossEvaluation: "Available",
          tensionTest: "1.8~2.2N",
          interface: "GUI menu interface, easy operation",
          batteryCapacity: "4400mAh, 220 times fusion and heating, pluggable, real-time power monitor",
          powerSupply: "Adaptor, input: AC 100-240V ( 50/60HZ ) , output: DC 11~13.5V",
          electrodesLifetime: "More than 4000 times splicing, electrodes can be replaced conveniently",
          externalPort: "USB2.0 port, used to derive splicing record data, software upgrade",
          operateEnvironment: "Altitude: 0~5000m; Relative humidity: 0~95%; Temperature: -10ºC~+50ºC; Wind speed: max 15m/s",
          volume: "200mm(L)×123mm(W)×96mm(H)",
          weight: "1.60kg (including battery)"
        },
        packaging: {
          packageSize: "53cm x 31cm x 34cm",
          grossWeight: "9.5kg"
        },
        afterSalesService: {
          warranty: "1 year for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      },
      {
        name: "High Accuracy Ribbon Splicer Shinho X950 Ribbon Fiber Splicing Machine",
        image: X950,
        keyFeatures: [
          "Applicable to 2-12 ribbon fiber splicing",
          "Accurate alignment, world standard fusion loss",
          "20s splicing time, heating 1-2/4-12 fiber ribbon 26s/40s",
          "Applicable to different types fibers (SM/MM/DS/NZDS)",
          "Ruggedized body, waterproof, anti-dust, anti-shock",
          "Pluggable Li-battery, support separate charging",
          "Easy to maintenance, easy to replace the electrodes",
          "USB port for software upgrading, records exporting",
          "Support 4000/100 groups fusion records/fusion images",
          "Comply with CE/Rohs international standard"
        ],
        technicalSpecifications: {
          model: "X-950",
          applicableFiber: "SM(ITU-T G.652), MM(ITU-T G.651), DS(ITU-T G.653), NZDS(ITU-T G.655)",
          fiberQuantity: "Single core, 2-12 cores",
          fiberAlignmentMethod: "Clad to Clad",
          typicalSpliceLoss: "SM:0.05dB, MM:0.02dB, DS:0.08dB, NZDS:0.08dB",
          returnLoss: "> 60dB",
          diameterOfCoating: "250~400µm",
          splicingProgram: "40 groups",
          operateMode: "Automatic/Manual",
          autoHeating: "Available",
          typicalSplicingTime: "20 seconds",
          typicalHeatingTime: "1-2 cores 26 seconds, 4-12 cores 40 seconds",
          fiberMagnification: "25X",
          displayScreen: "5.0 inch color LCD monitor",
          recordsStorage: "4000 groups data records and 100 group images",
          lossEvaluation: "Available",
          tensionTest: "1.8-2.2N",
          interface: "GUI menu interface, easy for operation",
          battery: "5200mAh Li-battery, typical 150 cycles splicing and heating, support separating charging",
          powerSupply: "Adapter, input: AC 100-240V(50/50HZ), output: 11-13.5V",
          electrodesLife: "More than 3000 ARC discharges, can be replaced conveniently",
          terminal: "USB2.0 port, for software upgrading and records exporting",
          operatingConditions: "Altitude: 0-5000m, Humidity: 0-95%, Temperature: -10ºC~+50ºC, Wind speed: Max 15m/s",
          dimension: "155mm(L)×144mm(W)×155mm(H)",
          weight: "2.30kg (including battery)"
        },
        packaging: {
          packageSize: "58.00cm * 34.00cm * 31.00cm",
          packageGrossWeight: "12.000kg"
        },
        afterSalesService: {
          warranty: "36 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      },
      {
        name: "Multi-Core Fiber Splicing Fusion Machine Shinho S22 7 Cores Fiber Splicer",
        image: S22,
        technicalSpecifications: {
          modelNo: "S-22",
          condition: "New",
          display: "5 Inch LCD Screen",
          applicableFiber: "SMF, MMF, NZDS, DS, PMF, LDF",
          alignment: "Edge Alignment, Eye Mode",
          size: "330mm*201mm*172mm (L*W*H)",
          catEyeAlignment: "Axial and End Face Calibration",
          interface: "GUI Menu Interface, Easy Operation",
          oemService: "Available",
          operationLanguage: "English, Russian, Portuguese etc.",
          transportPackage: "Carton Packing",
          specification: "160mm(L)x150mm(w)x145mm(H)/1.9kg",
          trademark: "shinho",
          origin: "Shanghai China",
          hsCode: "8515809090",
          productionCapacity: "5000unit/Month"
        },
        keyFeatures: [
          "Suitable for 125~250μm multi-core fiber fusion splicing",
          "Dual fiber end imaging patent, direct fiber end face view, more accurate alignment",
          "Fiber outline/end face dual mode aligning technology",
          "Different types of fibers can be spliced each other",
          "Precision integrated propulsion and new focusing design ensure accurate core alignment",
          "Real-time ARC calibration, arc position adjustable",
          "Support different angle fiber alignment",
          "Support wind-proof cover open and close to work automatically",
          "Support software upgrade, splice data and image export",
          "Humanized engineering design, simple operation and easy maintenance"
        ],
        packaging: {
          packageSize: "58.00cm * 34.00cm * 31.00cm",
          packageGrossWeight: "12.000kg"
        },
        afterSalesService: {
          warranty: "36 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      }
     

    ],
  },
  

  {
    category: "Fiber Cleaver",

    products: [
      {
        name: "Shinho High Precision Optical Fiber Cleaver X-50b Cable Fiber Cutter",
        image: X50B,
        technicalSpecifications: {
          modelNo: "X-50B",
          fiberDiameter: "125um",
          outercoatDiameter: "0.25mm-0.9mm",
          cleavedLength: "5-20mm",
          cleavedAngle: "0.7°",
          bladeLife: "48000",
          dimension: "63mm(W)×76mm(D)×63mm(H)",
          weight: "380g",
          color: "Silver, Black, Golden",
        
          transportPackage: "Packed in Carton",
          specification: "63mm(W)X 76mm(D)X 63mm(H)",
          trademark: "SHINHO",
          origin: "China",
          hsCode: "8205590000",
          bareFiberDiameter: "125µm",
          coatingDiameter: "0.25mm~0.9mm",
          fiberType: "Single tube fiber and Ribbon fiber (exchangeable)",
          
          
          
          mode: "Manual",
          
        },
        keyFeatures: [
          "Simple operation with wide lid opening",
          "Variable cleave lengths",
          "Fiber adaptor grooves for 250um & 900um, 3mm fibres",
          "Long 48,000 cleave life cycle",
          "Suits both single fibre and 12 fibre ribbon cable",
          "Durable & Reliable Design",
          "High Capacity Waste Bin"
        ],
       
        packaging: {
          packageSize: "58.00cm * 34.00cm * 31.00cm",
          packageGrossWeight: "12.000kg"
        },
        afterSalesService: {
          warranty: "36 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      },
      {
        name: "Shinho X-55B Automatic Fiber Cleaver",
        image: X55B, 
        keyFeatures: [
          "Small size, lightweight, and easy handling",
          "Applicable up to 12-fibre ribbon cleaving",
          "Fibre collector equipped as standard",
          "Simple and one-step operation",
          "One step to complete cleaving works including scrap collection",
          "Blade speed and anvil speed are mechanically controlled",
          "Automatic changes the position of the cleaving blade",
          "Support cleaved length 5~16mm",
          "Durable, Blade life more than 52000 times"
        ],
        technicalSpecifications: {
          model: "X-55B",
          cleavedLength: "5-16mm",
          color: "Black",
          weight: "340g",
          mode: "Automatic",
          application: "FTTH FTTB FTTX Network",
          coatingDiameter: "0.25mm~0.9mm",
          material: "Metal",
          bladeLife: "52000 Times",
          cleavedAngle: "0.5°",
          oem: "Accept",
          operation: "One Step",
          originPlace: "Anhui",
          fiber: "Bare Fiber",
          fiberDiameter: "125µm",
          transportPackage: "Packed in Carton",
          dimension: "103mm(W)× 93mm(D)× 47mm(H)",
          trademark: "SHINHO",
          origin: "China",
          hsCode: "8206000000"
        },
        packaging: {
          packageSize: "58.00cm * 34.00cm * 31.00cm",
          packageGrossWeight: "12.000kg"
        },
        afterSalesService: {
          warranty: "36 months for fusion splicers, 6 months for other parts",
          support: "Lifelong technical support, free repairs or replacement during warranty, charged only for parts after warranty"
        }
      }
     
    ],
  },
  // {
  //   category: "OTDR",

  //   products: [
  //     { name: "Minini OTDR SHINHO X-1100", image: Otdr },
  //     { name: "Handheld Singlemode Multimode OTDR X60", image: Otdr2 },
  //     { name: "Mini OTDR Optical Time Domain Reflectometer X30", image: Otdr3 },
  //   ],
  // },

  // {
  //   category: "Fiber Optic Tools",

  //   products: [
  //     {
  //       name: "Fiber Optic Fusion Splicing Tool Kit X20A",
  //       image: SplicingToolKit,
  //     },
  //     {
  //       name: "Three Holes Fiber Stripper (250um/900um/3.0mm)",
  //       image: Stripper,
  //     },
  //     { name: "Optic Fiber Shrinkable Protection Sleeve", image: Protector },
  //   ],
  // },
];

const ProductMain = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-4">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-orange-600">Products</span>
        </motion.h1>
        <div className="space-y-20">
          {productCategories.map((category, index) => (
            <ProductCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMain;
