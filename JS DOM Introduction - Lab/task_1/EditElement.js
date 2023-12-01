function editElement(ref, element, replacer) {
    const content = ref.textContent;
    const editedText = content.replace(new RegExp(element, 'g'), replacer);

    ref.textContent = editedText;
}