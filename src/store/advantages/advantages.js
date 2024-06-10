import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "axios";

export const useAdvantageStore = defineStore('advantages', () => {
    const uniqModelFigaro = ref([])
    const title = ref('')
    const uniqDescription = ref({
        description: 'Вращение стационарно заставляет иначе ' +
            'взглянуть на то, что такое нестационарный ' +
            'гироскопический стабилизатор',
        image: 'assets/img4.jpg',
        image_alt: 'нестационарный гироскопический стабилизатор'
    })
    async function getDescription() {
        let response = await axios.post('https://test-task-frontend-2023.slava.digital ')
        title.value = await response.data['block_heading']
        uniqModelFigaro.value = await response.data['features'].filter(item =>
            item["model_name"] === 'Figaro' &&
            item.image !== null &&
            item.description !== '')

        // Тут надо делать Computed свойство по фильтру ответа, но я не стал
    }

    function addUniqModelFigaro() {
        uniqModelFigaro.value.splice(1, 0, uniqDescription.value)
    }

    return {
        uniqModelFigaro,
        title,
        getDescription,
        addUniqModelFigaro
    }
})