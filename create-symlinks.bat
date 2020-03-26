cd src
mklink /j .\atoms ..\..\vue-rt-style-kit-atoms\src\
mklink /j .\molecules ..\..\vue-rt-style-kit-molecules\src\
mklink /j .\icons ..\..\vue-rt-style-kit-icons\src\
mkdir projectsJsons
cd projectsJsons
mklink .\atoms.json ..\..\..\vue-rt-style-kit-atoms\package.json
mklink .\molecules.json ..\..\..\vue-rt-style-kit-molecules\package.json
mklink .\icons.json ..\..\..\vue-rt-style-kit-icons\package.json
cd ..\..\
