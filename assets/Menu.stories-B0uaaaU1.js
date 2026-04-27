import{j as e}from"./jsx-runtime-CbWUKrAM.js";import{r as i}from"./iframe-QrAhYgZ6.js";import{M as C,N as I}from"./NestedMenu-U9hwnwyv.js";import{B as b}from"./Button-R7IQHb37.js";import{I as y}from"./IconArrowDownloadFilled-Bfu1q0xE.js";import{I as g,a as h,b as x}from"./IconBeach-CpOpKR7d.js";import{I as M}from"./IconMore-CIs3vzbY.js";import{I as O}from"./IconCheckmark-DTzYn64O.js";import{I as n}from"./IconSettings-Dicw4g7b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-TrSNQlsu.js";import"./index-v0UoQ_dC.js";import"./Text-C1G-C2s2.js";import"./helpers-BkG-ueoU.js";import"./index-AboGxAif.js";import"./types-504vuPxv.js";import"./index-B8fHE7Vh.js";import"./Popover-BpBS8_wD.js";import"./IconDismiss-CNA-a338.js";import"./Link-251B34DJ.js";import"./CollapseGroup-LO88GLhg.js";import"./Divider-DKK8rD_l.js";import"./AnimatePresenceWrapper-Dkxlp2Eo.js";import"./IconChevronDown-V0JwDFl-.js";import"./IconChevronUp-DzftSnUt.js";import"./IconChevronRight-C5jsflaB.js";import"./AvatarGroup-CbI79wGh.js";import"./DropzoneFileUpload-cA1XQx9z.js";import"./Label-j_yBuxkt.js";import"./useFormProps-B8UimY0F.js";import"./ErrorMessage-ClG4Y-aL.js";import"./IconDynamicComponent-DA2Ncl58.js";import"./Snackbar-Com4E3tr.js";import"./Alert-DkLv__H0.js";import"./IconDismissFilled-I1yFZtpg.js";import"./Progress-JIbIkId5.js";import"./IconAdd-brguhqFP.js";import"./Checkbox-1VL_1e4H.js";import"./IconInfo-BuPKL2u_.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
