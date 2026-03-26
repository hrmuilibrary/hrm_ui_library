import{j as o}from"./jsx-runtime-De1W4Ev6.js";import{r as b}from"./iframe-CJE6mlSt.js";import{M,a as f}from"./Popover-DUnqrT6c.js";import{a as x}from"./IconArrowDownloadFilled-BAqGI4ab.js";import{S as T}from"./index-CpTyNCiE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-aZAEwRrk.js";import"./types-Depnuowl.js";import"./helpers-CpGN0e-i.js";import"./IconDismiss-CEzd0GTy.js";import"./Tooltip-BOqjdarL.js";import"./Text-946_MTyk.js";import"./Button-BgFf7xij.js";import"./Link-BI2_PKY6.js";import"./NestedMenu-DIvXusC1.js";import"./index-m_oK3uhi.js";import"./CollapseGroup-C3HnrRPy.js";import"./Divider-BRwUNRH1.js";import"./AnimatePresenceWrapper-BMK4gXtO.js";import"./IconChevronDown-DdqzgZHo.js";import"./IconChevronUp-BOlICrZI.js";import"./IconChevronRight-CtIOMClN.js";import"./AvatarGroup-C0fIAnEL.js";import"./DropzoneFileUpload-BC8WYv0M.js";import"./Label-Bp9VT2jS.js";import"./useFormProps-CSvv9Slv.js";import"./ErrorMessage-BMLrnVeY.js";import"./IconDynamicComponent-NLcgcrMF.js";import"./Snackbar-DYEsE6x_.js";import"./Alert-DL4HZ91L.js";import"./IconDismissFilled-K1N0ol6b.js";import"./Progress-09pWlf0X.js";import"./IconAdd-DpG2pH_0.js";import"./Checkbox-C1mD2VgA.js";import"./IconInfo-DYdY39l3.js";import"./IconCheckmark-CrcI9Uas.js";import"./Empty-DNoCKhTi.js";import"./Image-k5JxOfYL.js";import"./Input-CaOpOAvO.js";import"./IconCheckmarkCircleFilled-D_7DvSv-.js";import"./IconChevronLeft-ClH19T1u.js";import"./IconCaretDownFilled-UJNhaKPF.js";import"./extends-CF3RwP-h.js";import"./Tab-DHttAARx.js";import"./Badge-CPwA8Mv1.js";import"./IconMore-DZ3mqbP1.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
