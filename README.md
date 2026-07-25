# Site web — Association TADASANA

Site vitrine one-page de l'association de yoga **TADASANA**, développé avec SvelteKit
(anciennement le site de la société POUGITOCAD, réutilisé et entièrement refondu :
design, textes, images et branding).

## Développement

Installer les dépendances puis lancer le serveur de développement :

```bash
bun install
bun run dev

# ou pour ouvrir directement un onglet du navigateur
bun run dev -- --open
```

## Build

Générer la version de production (site statique via `@sveltejs/adapter-static`) :

```bash
bun run build
```

Prévisualiser le build de production :

```bash
bun run preview
```

## Qualité de code

```bash
bun run check   # vérification TypeScript / Svelte
bun run lint    # Prettier + ESLint
bun run format  # formatage automatique (Prettier)
```

---

## Points ouverts / à valider avec le client

Ces points ne peuvent pas être finalisés uniquement depuis le code et nécessitent une
information ou une action complémentaire de la part du client.

### Informations manquantes

- **Numéro RNA de l'association** : un texte provisoire (« à compléter par
  l'association ») a été laissé dans les mentions légales
  (`src/routes/mentions-legales/+page.svelte`), en attendant le numéro officiel.
- **Lien HelloAsso** : le client a mentionné que les inscriptions et documents
  administratifs seraient disponibles sur HelloAsso, mais aucune URL n'a été fournie.
  Le nom « HelloAsso » est mentionné dans le texte (section Contact) mais sans lien
  cliquable pour le moment.
- **Photos des deux lieux de cours** (Salle des Fêtes d'Élincourt et Gymnase de
  Lassigny) : aucune photo n'a été fournie, les cartes "Où nous retrouver ?" sont donc
  uniquement textuelles.
- **Galerie photo** : seules les images fournies par le client ont été utilisées (peu
  nombreuses à ce stade). Un texte indique que la galerie s'enrichira au fil des
  prochaines saisons — à alimenter par le client au fur et à mesure.

### Actions à réaliser en dehors du code (hébergeur / DNS)

- **Changement d'e-mail chez l'hébergeur** : remplacer `pougitocad@gmail.com` par
  `pougi.yogi@gmail.com` dans la configuration de l'hébergeur (cette action ne peut pas
  être faite depuis le code du site, elle doit être réalisée manuellement par le
  client ou l'hébergeur).
- **Nom de domaine** : passage prévu de l'ancien nom vers
  `www.association-tadasana.fr`. Cela implique une configuration DNS / redirection
  chez l'hébergeur, à faire en parallèle de la mise en ligne du nouveau site.

### Contenu à valider

- Les textes (présentation des cours, FAQ, planning, tarifs, page enseignant, etc.)
  ont été rédigés à partir des informations et visuels fournis par le client. Ils
  restent **à relire et valider** avant mise en ligne définitive.
- La charte de couleurs (marron/terracotta/vert sauge/beige) a été définie à partir
  des sites de référence donnés par le client
  ([yogardenstudio.fr](https://yogardenstudio.fr/) et
  [latelierdeletre.com](https://www.latelierdeletre.com/)) — à valider visuellement.

### Divers (technique, mineur)

- Une règle ESLint (`svelte/no-navigation-without-resolve`) remonte des
  avertissements sur les liens `<a href="...">` classiques. Cette règle était déjà
  présente sur l'ancien site avant la refonte et n'a pas d'impact sur le
  fonctionnement du site ; elle n'a pas été traitée car hors périmètre de la refonte.
