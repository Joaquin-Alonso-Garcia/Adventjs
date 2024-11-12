manufacture(gifts, materials);

function manufacture(gifts, materials) {
  const essentialMaterials = new Set();
  const availableMaterials = materials.split("");

  gifts.forEach((gift) => {
  	const giftMaterials = gift.split('');

    giftMaterials.forEach((singleMaterial) => {
    	essentialMaterials.add(singleMaterial);
    });
  });

  console.log([...essentialMaterials]);

  return [];
}