import{j as o}from"./jsx-runtime-DYNaFl5D.js";import{r as b}from"./iframe-SPcc0_If.js";import{M,a as f}from"./Popover-cyTmrIkG.js";import{a as x}from"./IconArrowDownloadFilled-kPARq8Pp.js";import{S as T}from"./index-yiBMUDhn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-B1n-3Wt0.js";import"./types-MvG839B4.js";import"./helpers-DBMT0dM3.js";import"./IconDismiss-BdESZXuR.js";import"./Tooltip-toYm9qRe.js";import"./Text-B-GWGDgE.js";import"./Button-DKBYMXNB.js";import"./Link-BMAdX2HH.js";import"./NestedMenu-DDcQ_1D4.js";import"./index-DUq5tCO6.js";import"./CollapseGroup-D1-dIGx3.js";import"./Divider-sF-Ggz6a.js";import"./AnimatePresenceWrapper-BYAAiMQB.js";import"./IconChevronDown-B08O221n.js";import"./IconChevronUp-Cun4vSJz.js";import"./IconChevronRight-Bx1u_5cN.js";import"./AvatarGroup-B5lMWuN3.js";import"./DropzoneFileUpload-uDhqHwN-.js";import"./Label-CiaeJfoi.js";import"./useFormProps-DtJeLY0c.js";import"./ErrorMessage-Dpo3MrAn.js";import"./IconDynamicComponent-BEaMqZU3.js";import"./Snackbar-DME95ZMx.js";import"./Alert-zSgzKfYn.js";import"./IconDismissFilled-Di_m5r0r.js";import"./Progress-SsVI7u4o.js";import"./IconAdd-aIuduK_j.js";import"./Checkbox-BQqscDbd.js";import"./IconInfo-QrpURRIW.js";import"./IconCheckmark-Cz_Su7Pv.js";import"./Empty-B3v7GWzW.js";import"./Image-B9w1jmYV.js";import"./Input-BmrvnflZ.js";import"./IconCheckmarkCircleFilled-CAm2elvH.js";import"./IconChevronLeft-DDKhZ9Gf.js";import"./IconCaretDownFilled-C5CR31iB.js";import"./extends-CF3RwP-h.js";import"./Tab-DyRonycX.js";import"./Badge-CFig3lW2.js";import"./IconMore-CoAMIxO4.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
