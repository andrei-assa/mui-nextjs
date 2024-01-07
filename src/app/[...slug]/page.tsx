"use client";
import React from "react";
import {
    IntroductionView,
    SetupAndInstallationView,
    ApplyingAThemeView,
    ButtonsAndIcons,
    UnderstandingMuiView,
    TypographyAndPaperView,
    TextFieldsAndFormsView,
    ListsAndCardsView,
    DrawersAndMenusView,
    AppBarsAndToolbarsView,
    AutocompleteView
} from "@/views";
import {notFound} from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

// Use React.ComponentType when referring to the component itself
const navigationViews: { [key: string]: React.ComponentType } = {
    'introduction-to-material-ui': IntroductionView,
    'setup-and-installation': SetupAndInstallationView,
    'applying-a-theme-with-material-ui': ApplyingAThemeView,
    'buttons-&-icons': ButtonsAndIcons,
    "understanding-material-ui's-design-principles": UnderstandingMuiView,
    "typography-&-paper": TypographyAndPaperView,
    "textfields-&-forms": TextFieldsAndFormsView,
    'autocomplete': AutocompleteView,
    'lists-&-cards': ListsAndCardsView,
    'drawers-&-menus': DrawersAndMenusView,
    'app-bars-&-toolbars': AppBarsAndToolbarsView

    // Add other routes and component mappings as needed
};

export default function Page(props: PageProps) {
    console.log('props: ', props)
    const {params} = props;
    // Ensure params.slug is a string, as it could potentially be undefined or an array
    let slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    slug = decodeURIComponent(slug)
    const ViewComponent = navigationViews[slug]
    if (!ViewComponent) {
        notFound()
    }

    return (
        <div>
            {/* Use the ViewComponent by invoking it as a JSX tag */}
            <ViewComponent/>
        </div>
    );
}
