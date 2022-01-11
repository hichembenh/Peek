import taekwondo from '../images/taekwondo.jpg'
import cross from '../images/cross.jpg'
import step from '../images/step.jpg'
import bodyCombat from '../images/bodyCombat.jpg'
import bodyPump from '../images/bodyPump.jpg'
import zumba from '../images/zumba.jpg'
import gymnastique from '../images/gymnastique.jpg'

let tarifs = [
    {
        titre: 'Taekwondo',
        image: taekwondo,
        prix: 50,
        dedie: 'Tout les ages',
        description: 'Le Taekwondo est un art martial d’origine sud-coréenne qui se distingue des autres arts par le haut degré de spécialisation en techniques de coups de pieds. Afin d’éviter les blessures graves, les pratiquants, appelés taekwondoïstes, sont munis de nombreuses protections lors des combats.',
    },
    {
        titre: 'CrossFit',
        image: cross,
        prix: 40,
        dedie: 'Adulte',
        description: 'Le CrossFit combine principalement la force athlétique, l\'haltérophilie, la gymnastique et les sports d\'endurance',
    },{
        titre: 'Step',
        image: step,
        prix: 50,
        dedie: 'Tout les ages',
        description: 'Un cours de step dure en moyenne et selon le niveau de 30 à 45 minutes. Cette activité sollicite en effet conjointement l’ensemble des muscles et le système cardio-vasculaire, à intensité souvent élevée. Résultat : on brûle beaucoup (jusqu’à 400/500 calories par heure).',
    },
    {
        titre: 'Body Combat',
        image: bodyCombat,
        prix: 40,
        dedie: 'Adulte',
        description: 'Le BODYCOMBAT fait travailler vos jambes, tonifie vos bras, votre dos et vos épaules et constitue un entraînement phénoménal des muscles de la ceinture abdominale. Vous brûlez les calories, développez votre coordination, votre agilité et votre vitesse, et vous sentez fort.',
    },{
        titre: 'Body Pump',
        image: bodyPump,
        prix: 50,
        dedie: 'Tout les ages',
        description: 'Ce cours de renforcement musculaire très intense a été spécialement conçu pour sculpter la silhouette en un minimum de temps... À condition de s’investir à fond.',
    },
    {
        titre: 'Zumba',
        image: zumba,
        prix: 40,
        dedie: 'Adulte',
        description: 'Zumba est un mélange de danse et de fitness accessible à tous niveaux, un entrainement complet et facile à suivre qui sculpte votre corps au son des meilleurs hits internationaux.',
    },
    {
        titre: 'Gymnastique',
        image: gymnastique,
        prix: 40,
        dedie: 'Adulte',
        description: 'La gymnastique est un sport complet : les agrès exige des pratiquantes coordination, force, équilibre, agilité et souplesse, entre autres ! “Aucun groupe musculaire, dans la pratique, n’est oublié.”',
    }
]

export default tarifs