import{j as o}from"./jsx-runtime-m3b_6OT1.js";import{r as b}from"./iframe-oM5UKC75.js";import{M,a as f}from"./Popover-D4hZr9nz.js";import{a as x}from"./IconArrowDownloadFilled-BAO9ilPR.js";import{S as T}from"./index-B7QR_UtZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-vglmsqVc.js";import"./types-BjN0AaN3.js";import"./helpers-BKxxssDc.js";import"./IconDismiss-WzKnNALp.js";import"./Tooltip-CYG0JmLY.js";import"./Text-1CEUeWW4.js";import"./Button-DRl_tK4r.js";import"./Link-Aa0-TXF1.js";import"./NestedMenu-B16O65kl.js";import"./index-DFLm7QBz.js";import"./CollapseGroup-B_WS4wlI.js";import"./Divider-oK7Q8xmF.js";import"./AnimatePresenceWrapper-DgOu0Gc7.js";import"./IconChevronDown-Dv1b2jh1.js";import"./IconChevronUp-CgC7KZhy.js";import"./IconChevronRight-AxCViqji.js";import"./AvatarGroup-DQXG57V2.js";import"./DropzoneFileUpload-CqULd0Mg.js";import"./Label-62bGwlHv.js";import"./useFormProps-DcUF_9Ii.js";import"./ErrorMessage-DAY-EUCN.js";import"./IconDynamicComponent-BHdqEJBx.js";import"./Snackbar-C3wvyUtT.js";import"./Alert-DDH4DkK7.js";import"./IconDismissFilled-DJ-r4RAA.js";import"./Progress-CBTJUYV8.js";import"./IconAdd-A_aELW1p.js";import"./Checkbox-CCNChKMO.js";import"./IconInfo-Dj6n6JmB.js";import"./IconCheckmark-DHzwmAqx.js";import"./Empty-DU_49B5F.js";import"./Image-CCiq6NUm.js";import"./Input-DmpM9a71.js";import"./IconCheckmarkCircleFilled-U1ZPM-LT.js";import"./IconChevronLeft-CpZmdtgf.js";import"./IconCaretDownFilled-CnR_YJX4.js";import"./extends-CF3RwP-h.js";import"./Tab-lx_Y2py9.js";import"./Badge-CdvvDgmB.js";import"./IconMore-CJybr3K0.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
