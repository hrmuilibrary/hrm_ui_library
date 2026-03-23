import{j as o}from"./jsx-runtime-CrnPcFPJ.js";import{r as b}from"./iframe-Jig3VhaN.js";import{M,a as f}from"./Popover-Df9_Fptb.js";import{a as x}from"./IconArrowDownloadFilled-BZxHi5PN.js";import{S as T}from"./index-DaaQ5Ieq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DcNgyxCj.js";import"./types-B4hbXxVF.js";import"./helpers-isV5F8Tw.js";import"./IconDismiss-c-7-9W4m.js";import"./Tooltip-Dffot7EP.js";import"./Text-4u3-fEUk.js";import"./Button-QNQqxfki.js";import"./Link-BSiCgOdJ.js";import"./NestedMenu-C0ZxNttc.js";import"./index-D-cHf5BX.js";import"./CollapseGroup-BOFKWLvL.js";import"./Divider-BzX8nAnG.js";import"./AnimatePresenceWrapper-CLkRx8cD.js";import"./IconChevronDown-BAnbZgqM.js";import"./IconChevronUp-BqRsdtNd.js";import"./IconChevronRight-CBjLqmIu.js";import"./AvatarGroup-CNgGHZpD.js";import"./DropzoneFileUpload-CmhKzKMK.js";import"./Label-0Z4ct8av.js";import"./useFormProps-B2M3Z999.js";import"./ErrorMessage-DRrVSFzT.js";import"./IconDynamicComponent-gN0wLHhk.js";import"./Snackbar-Bz0BwjIk.js";import"./Alert-2_ZDhWU7.js";import"./IconDismissFilled-lPFwPbQL.js";import"./Progress-DO4mXh0J.js";import"./IconAdd-BikEodX6.js";import"./Checkbox-BRdfDO9i.js";import"./IconInfo-EK9fklS-.js";import"./IconCheckmark-BTmuggeM.js";import"./Empty-DI_nDmYR.js";import"./Image-rYk3mg_7.js";import"./Input-BIw5qY1r.js";import"./IconCheckmarkCircleFilled-DNSoQlE8.js";import"./IconChevronLeft-BMMzQR6z.js";import"./IconCaretDownFilled-BC8hzs1g.js";import"./extends-CF3RwP-h.js";import"./Tab-GjBB_dDv.js";import"./Badge-C04IcUlc.js";import"./IconMore-BSr3v4EN.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
