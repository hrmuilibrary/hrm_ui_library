import{j as e}from"./jsx-runtime-Cj1-3MCq.js";import{r as i}from"./iframe-CfhHRHWj.js";import{M as C,N as I}from"./NestedMenu-DGF944vo.js";import{B as b}from"./Button-DlZuiUDW.js";import{I as y}from"./IconArrowDownloadFilled-DgUwZOpJ.js";import{I as g,a as h,b as x}from"./IconBeach-B4t28a2O.js";import{I as M}from"./IconMore-Dj8V5MCP.js";import{I as O}from"./IconCheckmark-ClVlIHDz.js";import{I as n}from"./IconSettings-uJQ0c0gA.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DxJrfLLG.js";import"./index-LyawtWbk.js";import"./Text-CilXBu1n.js";import"./helpers-DYJyNS-c.js";import"./index-AboGxAif.js";import"./types-CMdgBmJk.js";import"./index-Df_KU_ce.js";import"./Popover-DINXwQ3e.js";import"./IconDismiss-B5KQeYAX.js";import"./Link-D4OU_jH7.js";import"./CollapseGroup-D2whG1jP.js";import"./Divider-wSj8Mlyb.js";import"./AnimatePresenceWrapper-B_j4hTgQ.js";import"./IconChevronDown-CaISB0QO.js";import"./IconChevronUp-Cqg0Rsct.js";import"./IconChevronRight-BVZMRuNB.js";import"./AvatarGroup-HYhwbzAt.js";import"./DropzoneFileUpload-f7eWYNAS.js";import"./Label-CrOL0JDW.js";import"./useFormProps-DNLm0Fq6.js";import"./ErrorMessage-B0Tr5Nrg.js";import"./IconDynamicComponent-Drxx-5YP.js";import"./Snackbar-BGYP43ky.js";import"./Alert-BLhXEpTY.js";import"./IconDismissFilled-BuzRGGAr.js";import"./Progress-B28AuZ3o.js";import"./IconAdd-C_abmG3q.js";import"./Checkbox-Ds5KlpkY.js";import"./IconInfo-Nj-FqoF-.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
