cd src/
ln -s ../../atoms/src atoms
ln -s ../../molecules/src molecules
ln -s ../../icons/src icons
mkdir projectsJsons
cd projectsJsons
ln -s ../../../atoms/package.json atoms.json
ln -s ../../../molecules/package.json molecules.json
ln -s ../../../icons/package.json icons.json
cd ../../
