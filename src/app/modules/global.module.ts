import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MessageModule, MessagesModule, ConfirmDialogModule, InputTextModule, ProgressSpinnerModule, ProgressBarModule, ButtonModule, InputTextareaModule, DropdownModule, PanelModule, TooltipModule, CalendarModule, CheckboxModule, DialogModule, FieldsetModule, PanelMenuModule, FileUploadModule, SliderModule, MultiSelectModule, ContextMenuModule, ToolbarModule, RatingModule, RadioButtonModule, ChartModule, ListboxModule, AccordionModule, AutoCompleteModule, BreadcrumbModule, CardModule, CarouselModule, ChipsModule, CodeHighlighterModule, ColorPickerModule, EditorModule, GalleriaModule, GrowlModule, InplaceModule, InputMaskModule, InputSwitchModule, LightboxModule, MegaMenuModule, MenuModule, MenubarModule, OrderListModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PasswordModule, PickListModule, ScrollPanelModule, SelectButtonModule, SlideMenuModule, SpinnerModule, SplitButtonModule, StepsModule, TabMenuModule, TabViewModule, TerminalModule, TieredMenuModule, ToggleButtonModule, TreeModule, TreeTableModule, SidebarModule, MessageService } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { FormsNewServiceComponent } from './forms-new-service/forms-new-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    FormsNewServiceComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
    ConfirmDialogModule,
    ProgressBarModule,
    ToastModule,
  ],
  exports: [
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ColorPickerModule,
    CommonModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    FullCalendarModule,
    GalleriaModule,
    GrowlModule,
    HttpClientModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    LightboxModule,
    ListboxModule,
    ListboxModule,
    MegaMenuModule,
    MenubarModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelMenuModule,
    PanelModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollPanelModule,
    SelectButtonModule,
    SidebarModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,

  ]
})
export class GlobalModule { }
