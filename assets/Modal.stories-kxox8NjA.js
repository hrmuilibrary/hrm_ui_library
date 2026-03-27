import{j as o}from"./jsx-runtime-CsXQJ7ac.js";import{r as b}from"./iframe-DCpW1vpJ.js";import{M,a as f}from"./Popover-elIybGUc.js";import{a as x}from"./IconArrowDownloadFilled-BN2GaKgq.js";import{S as T}from"./index-JexgMHNE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-DpzkZJq1.js";import"./types-p5G-Q8ac.js";import"./helpers-D1w7W5rb.js";import"./IconDismiss-CB0kTwAt.js";import"./Tooltip-Bsd_ffEq.js";import"./Text-DhpIWbf4.js";import"./Button-Drhmfn0v.js";import"./Link-DapaRTio.js";import"./NestedMenu-CNXuwU6o.js";import"./index-CfmjGrBY.js";import"./CollapseGroup-C156Ahfe.js";import"./Divider-1XlHCHar.js";import"./AnimatePresenceWrapper-B6hq0xOt.js";import"./IconChevronDown-BR1ky2qY.js";import"./IconChevronUp-DeV4Xc2D.js";import"./IconChevronRight-CcmnjW1S.js";import"./AvatarGroup-CrNyT0JT.js";import"./DropzoneFileUpload-Cl7PcYcN.js";import"./Label-Ce0a4a2t.js";import"./useFormProps-MTbDTz_h.js";import"./ErrorMessage-PuOsB1Yv.js";import"./IconDynamicComponent-1UeWV85B.js";import"./Snackbar-DXgVF9y1.js";import"./Alert-lKrAIaYv.js";import"./IconDismissFilled-BJ4lTv2M.js";import"./Progress-B22pRYwm.js";import"./IconAdd-CHPi_4VC.js";import"./Checkbox-CLx96l_c.js";import"./IconInfo-D6pH0U5G.js";import"./IconCheckmark-B0uGzmhV.js";import"./Empty-DReUNIm-.js";import"./Image-AewUzZms.js";import"./Input-CL_rnO5s.js";import"./IconCheckmarkCircleFilled-BDzGt8oL.js";import"./IconChevronLeft-DXwX3VoZ.js";import"./IconCaretDownFilled-1cV7GdX_.js";import"./extends-CF3RwP-h.js";import"./Tab-CxyPrm27.js";import"./Badge-CNz8mE3n.js";import"./IconMore-JJxXLj4d.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
