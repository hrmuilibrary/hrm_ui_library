import{j as o}from"./jsx-runtime-DUoqHfTI.js";import{r as b}from"./iframe-lb_dILUR.js";import{M,a as f}from"./Popover-v383RAF1.js";import{a as x}from"./IconArrowDownloadFilled-GX1Nm2Aq.js";import{S as T}from"./index-CMC1n0OJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-5MvGIPCt.js";import"./types-CvKYa35Y.js";import"./helpers-uo1c56Nd.js";import"./IconDismiss-Bf6A66rz.js";import"./Tooltip-DQWvOstr.js";import"./Text-CdChZzd0.js";import"./index-CMi4cka0.js";import"./Button-DH-fj3wa.js";import"./Link-BFpiW-88.js";import"./NestedMenu-DKb5fQ6I.js";import"./CollapseGroup-BOR73AFK.js";import"./Divider-oTtbyP3U.js";import"./AnimatePresenceWrapper-D726DdkB.js";import"./IconChevronDown-CK4H-Bkv.js";import"./IconChevronUp-CG9AvQ4y.js";import"./IconChevronRight-Dye1mir7.js";import"./AvatarGroup-DDHp0_HF.js";import"./DropzoneFileUpload-CQA4funY.js";import"./Label-BJhMevCW.js";import"./useFormProps-DnXWqu9z.js";import"./ErrorMessage-BVYX-oV0.js";import"./IconDynamicComponent-Cg_2CUIx.js";import"./Snackbar-BJelbAuO.js";import"./Alert-DQk1JaFm.js";import"./IconDismissFilled-B10uyt0x.js";import"./Progress-D7gpXzai.js";import"./IconAdd-Ck7L8_2F.js";import"./Checkbox-CBpoQzDa.js";import"./IconInfo-Bi7ojP_l.js";import"./IconCheckmark-BWFDOFL5.js";import"./Empty-CK3ZzqVV.js";import"./Image-BbOafQYo.js";import"./Input-ge2QMwN3.js";import"./IconCheckmarkCircleFilled-xLJY5VGd.js";import"./IconChevronLeft-Da8ULEcL.js";import"./IconCaretDownFilled-_wjhR5A7.js";import"./extends-CF3RwP-h.js";import"./Tab-DvtNQo17.js";import"./Badge-CTHLaRME.js";import"./IconMore-QPMu3mWc.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
