<template>
<a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <Header />
    </a-layout-header>
    <a-layout>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <Sidebar />
        </a-layout-sider>
        <a-layout-content>
            <a-row>
                <MainHeader heading="Manage Care Coordinator" buttonText="Add New Coordinator" modalScreen="coordinator"></MainHeader>
            </a-row>
            <CareCoordinator />
        </a-layout-content>
    </a-layout>
</a-layout>
</template>

<script>
import CareCoordinator from "@/components/care-coordinator/CareCoordinator";
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import MainHeader from "@/components/common/MainHeader";
export default {
    name: 'ViewManageCareCoordinator',
    components: {
        CareCoordinator,
        Header,
        Sidebar,
        MainHeader

    }

}
</script>
